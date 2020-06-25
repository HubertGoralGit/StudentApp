import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import UserPageTemplate from '../../templates/UserPageTemplate';
import Header from '../../components/Header/Header';
import Heading from '../../components/Heading/Heading';
import Input from '../../components/Input/Input';
import ButtonIcon from '../../components/ButtonIcon/ButtonIcon';
import addIcon from '../../assets/icons/plus.svg';
import ToDoItem from '../../components/ToDoItem/ToDoItem';
import { addItem } from '../../actions/index';

const StyledListWrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 60vh;
  display: flex;
  align-items: center;
`;
const StyledList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
`;
const StyledAddItemWrapper = styled.div`
  display: flex;
  width: 300px;
  justify-content: space-around;
  margin-top: 20px;
`;

class Todo extends Component {
  state = {
    value: '',
  };

  handleInputChange = event => this.setState({ value: event.target.value });

  handleOnClickAddButton = () => this.setState({ value: '' });

  render() {
    const { todo, itemType, addItem } = this.props;
    const { value } = this.state;

    return (
      <UserPageTemplate pageType="todo">
        <Header>
          <Heading big>My To-Do List</Heading>
        </Header>
        <StyledListWrapper>
          <StyledList>
            {todo.map(({ content, id }) => (
              <ToDoItem id={id} content={content} key={id} itemType="todo" />
            ))}

            <StyledAddItemWrapper>
              <Input value={value} onChange={this.handleInputChange} todo placeholder="add item" />
              <ButtonIcon
                onClick={() => {
                  if (value !== '') {
                    addItem(itemType, { content: value });
                    this.handleOnClickAddButton();
                  }
                }}
                icon={addIcon}
                className="todo addItem"
              />
            </StyledAddItemWrapper>
          </StyledList>
        </StyledListWrapper>
      </UserPageTemplate>
    );
  }
}

Todo.propTypes = {
  todo: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      itemType: PropTypes.oneOf(['notes', 'todo', 'images']),
      addItem: PropTypes.func.isRequired,
    }),
  ),
};

Todo.defaultProps = {
  itemType: 'todo',
  todo: [],
};

const mapStateToProps = state => {
  const { todo } = state;
  return { todo };
};

const mapDispatchToProps = dispatch => ({
  addItem: (itemType, itemContent) => dispatch(addItem(itemType, itemContent)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Todo);
