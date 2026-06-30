import { ToggleControl, PanelRow, Fill } from "@wordpress/components";
import { registerPlugin } from "@wordpress/plugins";
import { __ } from "@wordpress/i18n";
registerPlugin("alerts-dlx-advanced-inner-blocks-slot-fills", {
  render: () => {
    return (
      <Fill name="alertsDLXSettingsPanelEnd">
        {({ attributes, setAttributes }) => {
          const { innerBlocksEnabled } = attributes;

          return (
            <>
              <PanelRow>
                <ToggleControl
                  label={__("Enable Flexible InnerBlocks", "alerts-dlx")}
                  checked={innerBlocksEnabled}
                  onChange={(value) => {
                    setAttributes({
                      innerBlocksEnabled: value,
                    });
                  }}
                  help={__(
                    "Enable this option to allow the use of any block within the alert.",
                    "alerts-dlx"
                  )}
                />
              </PanelRow>
            </>
          );
        }}
      </Fill>
    );
  },
});
