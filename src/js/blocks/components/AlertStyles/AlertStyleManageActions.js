import { useState } from "@wordpress/element";
import { Button, Modal, TextControl, Spinner } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import { extractStyleSettingsFromAttributes } from "../../alert-styles/schema";
import {
  updateAlertStyle,
  renameAlertStyle,
  deleteAlertStyle,
} from "../../alert-styles/api";
import { getDetachAttributes } from "../../alert-styles/mergeAttributes";
import { useAlertStylesContext } from "./context";

/**
 * Manage actions for a linked Alert Style.
 *
 * @param {Object}   props               Component props.
 * @param {Object}   props.attributes    Block attributes.
 * @param {Function} props.setAttributes   Set attributes callback.
 * @param {Object}   props.linkedStyle   Linked style record.
 * @return {JSX.Element|null}
 */
const AlertStyleManageActions = ({
  attributes,
  setAttributes,
  linkedStyle,
}) => {
  const [modal, setModal] = useState(null);
  const [title, setTitle] = useState(linkedStyle?.title || "");
  const [working, setWorking] = useState(false);
  const [error, setError] = useState("");
  const { setStyles, refreshStyles, setLinkedStyle } = useAlertStylesContext();

  if (!linkedStyle) {
    return null;
  }

  const canManage = alertsDlxBlock.alertStyles.canManageStyles; // eslint-disable-line no-undef

  const handleUpdate = async () => {
    setWorking(true);
    setError("");
    try {
      const settings = extractStyleSettingsFromAttributes(
        attributes.alertGroup,
        attributes
      );
      const data = await updateAlertStyle(
        linkedStyle.id,
        settings,
        linkedStyle.update_nonce
      );
      if (data.styles) {
        setStyles(data.styles);
      }
      if (data.style) {
        setLinkedStyle(data.style);
      }
      setModal(null);
    } catch (err) {
      setError(
        err.message || __("Could not update Alert Style.", "alerts-dlx")
      );
    } finally {
      setWorking(false);
    }
  };

  const handleRename = async () => {
    if (!title.trim()) {
      setError(__("Please enter a style name.", "alerts-dlx"));
      return;
    }
    setWorking(true);
    setError("");
    try {
      const data = await renameAlertStyle(
        linkedStyle.id,
        title.trim(),
        linkedStyle.rename_nonce
      );
      if (data.styles) {
        setStyles(data.styles);
      }
      if (data.style) {
        setLinkedStyle(data.style);
      }
      setModal(null);
    } catch (err) {
      setError(
        err.message || __("Could not rename Alert Style.", "alerts-dlx")
      );
    } finally {
      setWorking(false);
    }
  };

  const handleDelete = async () => {
    setWorking(true);
    setError("");
    try {
      const data = await deleteAlertStyle(
        linkedStyle.id,
        linkedStyle.delete_nonce
      );
      if (data.styles) {
        setStyles(data.styles);
      }
      setLinkedStyle(null);
      setAttributes({ alertStyleId: 0 });
      setModal(null);
    } catch (err) {
      setError(
        err.message || __("Could not delete Alert Style.", "alerts-dlx")
      );
    } finally {
      setWorking(false);
    }
  };

  const handleUnlink = () => {
    const detached = getDetachAttributes(attributes, linkedStyle);
    setAttributes(detached);
    setLinkedStyle(null);
  };

  const handleUseStyleIcon = () => {
    setAttributes({
      hasCustomIcon: false,
      icon: undefined,
      iconSource: undefined,
      imageId: undefined,
      imageUrl: undefined,
    });
  };

  return (
    <div className="alerts-dlx-alert-style-manage-actions">
      <p className="alerts-dlx-alert-style-linked-badge">
        {__("Using Alert Style:", "alerts-dlx")}{" "}
        <strong>{linkedStyle.title}</strong>
      </p>
      {attributes.hasCustomIcon && (
        <p className="alerts-dlx-alert-style-custom-icon-notice">
          {__("This block uses a custom icon.", "alerts-dlx")}
          <Button variant="link" onClick={handleUseStyleIcon}>
            {__("Use style icon", "alerts-dlx")}
          </Button>
        </p>
      )}
      <div className="alerts-dlx-alert-style-action-buttons">
        {canManage && (
          <>
            <Button
              variant="secondary"
              onClick={() => {
                setError("");
                setModal("update");
              }}
            >
              {__("Update Alert Style", "alerts-dlx")}
            </Button>
            <Button
              variant="secondary"
              onClick={() => {
                setTitle(linkedStyle.title);
                setError("");
                setModal("rename");
              }}
            >
              {__("Rename", "alerts-dlx")}
            </Button>
            <Button
              variant="secondary"
              isDestructive
              onClick={() => {
                setError("");
                setModal("delete");
              }}
            >
              {__("Delete Style", "alerts-dlx")}
            </Button>
          </>
        )}
        <Button variant="tertiary" onClick={handleUnlink}>
          {__("Unlink Style", "alerts-dlx")}
        </Button>
      </div>

      {modal === "update" && (
        <Modal
          title={__("Update Alert Style?", "alerts-dlx")}
          onRequestClose={() => setModal(null)}
        >
          <p>
            {__(
              "This will update the global Alert Style. All linked blocks without a custom icon will inherit the changes.",
              "alerts-dlx"
            )}
          </p>
          {error && <p className="alerts-dlx-alert-style-error">{error}</p>}
          <div className="alerts-dlx-alert-style-modal-actions">
            <Button
              variant="secondary"
              onClick={() => setModal(null)}
              disabled={working}
            >
              {__("Cancel", "alerts-dlx")}
            </Button>
            <Button variant="primary" onClick={handleUpdate} disabled={working}>
              {working ? <Spinner /> : __("Update Alert Style", "alerts-dlx")}
            </Button>
          </div>
        </Modal>
      )}

      {modal === "rename" && (
        <Modal
          title={__("Rename Alert Style", "alerts-dlx")}
          onRequestClose={() => setModal(null)}
        >
          <TextControl
            label={__("Style Name", "alerts-dlx")}
            value={title}
            onChange={setTitle}
          />
          {error && <p className="alerts-dlx-alert-style-error">{error}</p>}
          <div className="alerts-dlx-alert-style-modal-actions">
            <Button
              variant="secondary"
              onClick={() => setModal(null)}
              disabled={working}
            >
              {__("Cancel", "alerts-dlx")}
            </Button>
            <Button variant="primary" onClick={handleRename} disabled={working}>
              {working ? <Spinner /> : __("Rename", "alerts-dlx")}
            </Button>
          </div>
        </Modal>
      )}

      {modal === "delete" && (
        <Modal
          title={__("Delete Alert Style?", "alerts-dlx")}
          onRequestClose={() => setModal(null)}
        >
          <p>
            {__(
              "This will permanently delete the Alert Style. Linked blocks will keep their current appearance until edited.",
              "alerts-dlx"
            )}
          </p>
          {error && <p className="alerts-dlx-alert-style-error">{error}</p>}
          <div className="alerts-dlx-alert-style-modal-actions">
            <Button
              variant="secondary"
              onClick={() => setModal(null)}
              disabled={working}
            >
              {__("Cancel", "alerts-dlx")}
            </Button>
            <Button
              variant="primary"
              isDestructive
              onClick={handleDelete}
              disabled={working}
            >
              {working ? <Spinner /> : __("Delete Alert Style", "alerts-dlx")}
            </Button>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default AlertStyleManageActions;
