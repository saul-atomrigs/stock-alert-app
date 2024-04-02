import { useState, useRef } from 'react';
import styled from 'styled-components';

type TooltipProps = {
  content: string;
  children: React.ReactNode;
};

export default function TooltipComponent({ content, children }: TooltipProps) {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  const tooltipRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => setIsTooltipVisible(true);
  const handleMouseLeave = () => setIsTooltipVisible(false);

  return (
    <Tooltip.Container
      ref={tooltipRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {isTooltipVisible && (
        <Tooltip.Content className="tooltip">
          <span>{content}</span>
        </Tooltip.Content>
      )}
    </Tooltip.Container>
  );
}

const Tooltip = {
  Container: styled.div`
    position: relative;
    display: inline-block;
  `,
  Content: styled.div`
    position: absolute;
    z-index: 1;
    bottom: 110%;
    left: 50%;
    transform: translateX(-50%);
    background-color: #333;
    color: #fff;
    padding: 8px;
    border-radius: 4px;
  `,
};
