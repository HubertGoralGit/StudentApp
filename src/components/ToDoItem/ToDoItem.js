import styled from 'styled-components';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ButtonIcon from '../../components/ButtonIcon/ButtonIcon';
import tickIcon from '../../assets/icons/tick.svg';
import trashIcon from '../../assets/icons/trash.svg';
import { connect } from 'react-redux';
import { removeItem } from '../../actions/index';

const StyledItemContent = styled.span`
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.regular};
  margin-bottom: 10px;
  background-color: ${({ theme }) => theme.todo};
  width: 200px;
  padding: 10px 10px 10px 15px;
  border-radius: 50px;

  &.taskDone {
    background-color: grey;
    text-decoration: line-through;
  }
`;

const StyledTickButton = styled(ButtonIcon)`
  &.taskDone {
    display: none;
  }
`;

const StyledItemWrapper = styled.div`
  display: flex;
  width: 300px;
  justify-content: space-around;
`;

class ToDoItem extends Component {
  state = {
    isTaskDone: false,
  };

  handleTaskDone = () => {
    this.setState({ isTaskDone: true });
  };

  render() {
    const { id, content, itemType, removeItem } = this.props;
    const { isTaskDone } = this.state;
    let taskDone = isTaskDone ? 'taskDone' : 'taskNotDone';
    return (
      <StyledItemWrapper>
        <StyledItemContent className={taskDone}>{content}</StyledItemContent>
        <StyledTickButton
          onClick={() => this.handleTaskDone()}
          icon={tickIcon}
          className={`todo ${taskDone}`}
        />
        <ButtonIcon
          onClick={() => removeItem(itemType, id)}
          trash
          icon={trashIcon}
          className="todo"
        />
      </StyledItemWrapper>
    );
  }
}

ToDoItem.propTypes = {
  id: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  itemType: PropTypes.oneOf(['notes', 'todo', 'images']),
};

ToDoItem.defaultProps = {
  itemType: 'todo',
};

const mapDispatchToProps = dispatch => ({
  removeItem: (itemType, id) => dispatch(removeItem(itemType, id)),
});

export default connect(
  null,
  mapDispatchToProps,
)(ToDoItem);
