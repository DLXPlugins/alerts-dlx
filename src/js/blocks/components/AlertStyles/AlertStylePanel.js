import { useState, useEffect, useCallback } from "@wordpress/element";
import { PanelBody, Button, Spinner } from "@wordpress/components";
import { InspectorControls } from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";
import { getApplyStyleUpdates } from "../../alert-styles/mergeAttributes";
import { getAlertStyle, loadAlertStyles } from "../../alert-styles/api";
import AlertStylesContext, { useAlertStylesContext } from "./context";
import AlertStyleSelectControl from "./AlertStyleSelectControl";
import AlertStyleSaveModal from "./AlertStyleSaveModal";
import AlertStyleManageActions from "./AlertStyleManageActions";

/**
 * Inner panel content using Alert Styles context.
 *
 * @param {Object}   props             Component props.
 * @param {Object}   props.attributes  Block attributes.
 * @param {Function} props.setAttributes Set attributes callback.
 * @return {JSX.Element}
 */
const AlertStylePanelContent = ({ attributes, setAttributes }) => {
  const [showSaveModal, setShowSaveModal] = useState(false);
  const [applying, setApplying] = useState(false);
  const { styles, loading, linkedStyle, setLinkedStyle } =
    useAlertStylesContext();

  const canManage = alertsDlxBlock.alertStyles.canManageStyles; // eslint-disable-line no-undef
  const styleId = parseInt(attributes.alertStyleId, 10) || 0;

  useEffect(() => {
    if (styleId <= 0) {
      setLinkedStyle(null);
      return;
    }

    let cancelled = false;

    const loadLinked = async () => {
      const cached = styles.find((style) => style.id === styleId);
      if (cached) {
        setLinkedStyle(cached);
        return;
      }

      try {
        const style = await getAlertStyle(styleId);
        if (!cancelled) {
          setLinkedStyle(style);
        }
      } catch (err) {
        if (!cancelled) {
          setLinkedStyle(null);
        }
      }
    };

    loadLinked();

    return () => {
      cancelled = true;
    };
  }, [styleId, styles, setLinkedStyle]);

  const handleApplyStyle = async (selectedId) => {
    if (selectedId <= 0 || selectedId === styleId) {
      return;
    }

    setApplying(true);
    try {
      const style =
        styles.find((item) => item.id === selectedId) ||
        (await getAlertStyle(selectedId));
      setLinkedStyle(style);
      setAttributes(getApplyStyleUpdates(selectedId));
    } catch (err) {
      // Silently fail apply.
    } finally {
      setApplying(false);
    }
  };

  const handleStyleSaved = (style) => {
    setLinkedStyle(style);
    setAttributes(getApplyStyleUpdates(style.id));
  };

  return (
    <PanelBody
      title={__("Alert Styles", "alerts-dlx")}
      initialOpen={styleId > 0}
      className="alerts-dlx-alert-styles-panel"
    >
      {loading && (
        <div className="alerts-dlx-alert-style-loading">
          <Spinner />
          <span>{__("Loading Alert Styles…", "alerts-dlx")}</span>
        </div>
      )}

      {((!loading && styleId <= 0) || (styleId > 0 && !linkedStyle)) && (
        <>
          <AlertStyleSelectControl
            styles={styles}
            value={0}
            onChange={handleApplyStyle}
            disabled={applying}
          />
          {canManage && (
            <Button
              variant="secondary"
              onClick={() => setShowSaveModal(true)}
              className="alerts-dlx-alert-style-save-button"
            >
              {__("Save as Alert Style", "alerts-dlx")}
            </Button>
          )}
        </>
      )}

      {!loading && styleId > 0 && (
        <AlertStyleManageActions
          attributes={attributes}
          setAttributes={setAttributes}
          linkedStyle={linkedStyle}
        />
      )}

      {showSaveModal && (
        <AlertStyleSaveModal
          attributes={attributes}
          onClose={() => setShowSaveModal(false)}
          onStyleSaved={handleStyleSaved}
        />
      )}
    </PanelBody>
  );
};

/**
 * Alert Styles panel with context provider.
 *
 * @param {Object}   props               Component props.
 * @param {Object}   props.attributes    Block attributes.
 * @param {Function} props.setAttributes Set attributes callback.
 * @return {JSX.Element}
 */
const AlertStylePanel = (props) => {
  const { attributes } = props;
  const [styles, setStyles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [linkedStyle, setLinkedStyle] = useState(null);

  const refreshStyles = useCallback(
    async (blockType) => {
      setLoading(true);
      try {
        const loaded = await loadAlertStyles(
          blockType || attributes.alertGroup
        );
        setStyles(loaded);
      } catch (err) {
        setStyles([]);
      } finally {
        setLoading(false);
      }
    },
    [attributes.alertGroup]
  );

  useEffect(() => {
    refreshStyles(attributes.alertGroup);
  }, [attributes.alertGroup, refreshStyles]);

  return (
    <AlertStylesContext.Provider
      value={{
        styles,
        setStyles,
        loading,
        setLoading,
        linkedStyle,
        setLinkedStyle,
        refreshStyles,
      }}
    >
      <InspectorControls group="styles">
        <AlertStylePanelContent {...props} />
      </InspectorControls>
    </AlertStylesContext.Provider>
  );
};

export default AlertStylePanel;
