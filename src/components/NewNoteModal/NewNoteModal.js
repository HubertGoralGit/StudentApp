import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Input from '../Input/Input';
import Button from '../Button/Button';
import Heading from '../Heading/Heading';
import { addItem as addItemAction } from '../../actions/index';

const StyledModalWrapper = styled.div`
  z-index: 9999;
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  background-color: white;
  border-left: 10px solid ${({ theme }) => theme.notes};
  padding: 100px 50px;
  width: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
  transform: translate(${({ isVisible }) => (isVisible ? '0' : '100%')});
  transition: transform 0.25s ease-in-out;

  @media (min-width: ${({ theme }) => theme.resolution.l}) {
    width: 680px;
  }
`;

const StyledTextArea = styled(Input)`
  margin: 0 0 100px;
  border-radius: 20px;
  height: 30vh;
  width: 100%;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.regular};
`;

const StyledInput = styled(Input)`
  width: 100%;
`;

const StyledErrorWrapper = styled.div`
  margin-bottom: 15px;
  color: red;
`;

class NewNoteModal extends Component {
  render() {
    const { itemType, isVisible, addItem } = this.props;

    return (
      <StyledModalWrapper isVisible={isVisible}>
        <Heading big>Create New Note</Heading>
        <Formik
          initialValues={{ title: '', content: '' }}
          validate={values => {
            const errors = {};
            if (!values.title) {
              errors.title = 'Title required';
            }
            if (!values.content) {
              errors.content = 'Note content required';
            }
            return errors;
          }}
          onSubmit={values => {
            addItem(itemType, values);
            values.content = '';
            values.title = '';
          }}
        >
          {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
            <Form>
              <StyledErrorWrapper>
                {errors.title && touched.title && errors.title}
              </StyledErrorWrapper>
              <StyledInput
                type="text"
                name="title"
                placeholder="title"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.title}
              />
              <StyledErrorWrapper>
                {errors.content && touched.content && errors.content}
              </StyledErrorWrapper>
              <StyledTextArea
                as="textarea"
                name="content"
                placeholder="text"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.content}
              />

              <Button type="submit" add>
                Add Note
              </Button>
            </Form>
          )}
        </Formik>
      </StyledModalWrapper>
    );
  }
}

NewNoteModal.propTypes = {
  itemType: PropTypes.oneOf(['notes', 'todo', 'images']),
  isVisible: PropTypes.bool,
  addItem: PropTypes.func.isRequired,
};

NewNoteModal.defaultProps = {
  itemType: 'notes',
  isVisible: false,
};

const mapDispatchToProps = dispatch => ({
  addItem: (itemType, itemContent) => dispatch(addItemAction(itemType, itemContent)),
});

export default connect(
  null,
  mapDispatchToProps,
)(NewNoteModal);
