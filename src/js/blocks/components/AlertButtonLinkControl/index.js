import "./editor.scss";

/**
 * WordPress dependencies
 */
import { useState } from "@wordpress/element";
import { Button, Popover } from "@wordpress/components";
import { filterURLForDisplay } from "@wordpress/url";
import { __ } from "@wordpress/i18n";
import { closeSmall, link } from "@wordpress/icons";

import URLPicker from "../URLPicker";

/**
 * Sidebar link control with preview, clear, and URLPicker popover.
 *
 * @param {Object}   props              Component props.
 * @param {string}   props.buttonUrl    Current button URL.
 * @param {Function} props.setAttributes  Block setAttributes callback.
 * @return {import('react').JSX.Element} AlertButtonLinkControl component.
 */
const AlertButtonLinkControl = ({ buttonUrl, setAttributes }) => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [addLinkAnchor, setAddLinkAnchor] = useState(null);

  const clearUrl = () => {
    setAttributes({
      buttonUrl: "",
      buttonHasUrl: false,
    });
  };

  if (buttonUrl) {
    return (
      <div className="alerts-dlx-button-link-preview">
        <Button
          variant="link"
          className="alerts-dlx-button-link-preview__url"
          href={buttonUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {filterURLForDisplay(buttonUrl)}
        </Button>
        <Button
          icon={closeSmall}
          label={__("Remove link", "alerts-dlx")}
          onClick={clearUrl}
          className="alerts-dlx-button-link-preview__remove"
          variant="secondary"
        />
      </div>
    );
  }

  return (
    <>
      <Button
        ref={setAddLinkAnchor}
        variant="secondary"
        icon={link}
        onClick={() => setIsPopoverOpen(true)}
      >
        {__("Add Link", "alerts-dlx")}
      </Button>
      {isPopoverOpen && (
        <Popover
          anchor={addLinkAnchor}
          onClose={() => setIsPopoverOpen(false)}
          className="alerts-dlx-button-link-popover"
        >
          <div className="alerts-dlx-button-link-popover__content">
            <URLPicker
              savedValue={buttonUrl}
              hasInititialFocus={true}
              onItemSelect={(e, url) => {
                const linkUrl = "string" === typeof url ? url : url?.permalink;
                if (linkUrl) {
                  setAttributes({
                    buttonUrl: linkUrl,
                    buttonHasUrl: true,
                  });
                }
                setIsPopoverOpen(false);
              }}
            />
          </div>
        </Popover>
      )}
    </>
  );
};

export default AlertButtonLinkControl;
