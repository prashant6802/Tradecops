import React from 'react';

class DisableRightClick extends React.Component {
  handleContextMenu = (e) => {
    e.preventDefault();
  };

  handleKeyDown = (e) => {
    // Prevent key combinations using Ctrl, Alt, Shift, or any other key
    if (e.ctrlKey || e.altKey || e.shiftKey || e.metaKey) {
      e.preventDefault();
    }
  };

  componentDidMount() {
    document.addEventListener('contextmenu', this.handleContextMenu);
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('contextmenu', this.handleContextMenu);
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  render() {
    return (
      <div>
        {/* Your website content */}
      </div>
    );
  }
}

export default DisableRightClick;
