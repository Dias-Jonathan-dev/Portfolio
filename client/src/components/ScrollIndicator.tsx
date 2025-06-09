import "../styles/scrollIndicator.css";

const ScrollIndicator = () => {
  return (
    <div className="scroll-container">
      <p>Scroll pour explorer</p>
      <div className="scroll-indicator">
        <div className="scroll-hole">
          <div className="scroll-dot" />
        </div>
      </div>
    </div>
  );
};

export default ScrollIndicator;
