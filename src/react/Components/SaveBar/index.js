import { useEffect, useRef } from "react";
import { Button } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import classnames from "classnames";

const SaveBar = ({
  onDiscardChanges,
  onSave,
  onReset,
  isSaving = false,
  isResetting = false,
  isDirtyFields = false,
  hasErrors = false,
}) => {
  const saveBarRef = useRef(null);

  useEffect(() => {
    const saveBar = saveBarRef.current;
    if (!saveBar) {
      return;
    }

    if (isDirtyFields && !hasErrors) {
      saveBar.style.opacity = "1";
      saveBar.style.minHeight = "1px";
      saveBar.style.height = "100%";
    } else {
      saveBar.style.opacity = "0";
      saveBar.style.height = "0";
    }
  }, [isDirtyFields, hasErrors, isSaving, isResetting]);

  const handleDiscard = (event) => {
    event.preventDefault();
    // eslint-disable-next-line no-alert
    if (window.confirm(__("Discard unsaved changes?", "alerts-dlx"))) {
      onDiscardChanges();
    }
  };

  const handleReset = (event) => {
    event.preventDefault();
    // eslint-disable-next-line no-alert
    if (window.confirm(__("Reset all settings to defaults?", "alerts-dlx"))) {
      onReset();
    }
  };

  return (
    <div
      className="adlx-admin-save-bar"
      ref={saveBarRef}
      style={{
        transition: "all 0.3s ease-in-out",
        opacity: 0,
        height: 0,
        overflow: "hidden",
      }}
    >
      <div className="adlx-admin__tabs--content-actions">
        <div className="adlx-admin__tabs--content-actions--left">
          <Button
            variant="primary"
            type="button"
            text={
              isSaving
                ? __("Saving…", "alerts-dlx")
                : __("Save Settings", "alerts-dlx")
            }
            disabled={isSaving || isResetting || hasErrors}
            onClick={(event) => {
              event.preventDefault();
              onSave();
            }}
          />
          <Button
            variant="secondary"
            type="button"
            text={__("Discard Changes", "alerts-dlx")}
            disabled={isSaving || isResetting || hasErrors}
            onClick={handleDiscard}
          />
        </div>
        <div className="adlx-admin__tabs--content-actions--right">
          <Button
            variant="secondary"
            type="button"
            className={classnames({ "is-resetting": isResetting })}
            isDestructive={true}
            text={
              isResetting
                ? __("Resetting…", "alerts-dlx")
                : __("Reset to Defaults", "alerts-dlx")
            }
            disabled={isSaving || isResetting || hasErrors}
            onClick={handleReset}
          />
        </div>
      </div>
    </div>
  );
};

export default SaveBar;
