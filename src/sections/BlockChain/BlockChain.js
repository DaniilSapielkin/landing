import { useState } from "react";
import Slider from "react-slick";
import cn from "classnames";

import { settingsSlider } from "../../constants/sliderSettings";
import classes from "./BlockChain.module.scss";
import { blocksInfo } from "./blocksInfo";
import { ReactComponent as IconArrow } from "../../assets/icons/rowRight.svg";

export const BlockChain = () => {
  const [isReadMore, setIsReadMore] = useState(false);

  const handleSetMore = (title) => {
    if (isReadMore) {
      setIsReadMore(false);
    } else {
      setIsReadMore(title);
    }
  };

  return (
    <div className={classes.root}>
      <div className={classes.header}>Blockchain integrations</div>

      <div>
        <div className={classes.blocksInfo}>
          <Slider {...settingsSlider}>
            {blocksInfo.map((block) => (
              <div key={block.title} className={classes.block}>
                <div className={classes.titleBlock}>
                  <div className={classes.icon}>{block.icon}</div>
                  <div className={classes.header}>{block.title}</div>
                </div>

                <div
                  className={cn(classes.description, {
                    [classes.isReadMore]: isReadMore === block.title,
                  })}
                >
                  {block.description}
                </div>

                {block.link && (
                  <div
                    className={classes.readMore}
                    onClick={() => handleSetMore(block.title)}
                  >
                    {isReadMore && isReadMore === block.title
                      ? "Close"
                      : "Read more"}
                    <IconArrow />
                  </div>
                )}
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};
