import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import CheckboxInputControl from './CheckboxInputControl';
import CheckboxInputFill from './CheckboxInputFill';
import newTheme from '../shared/themes/new';

const propTypes = {
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  onChange: PropTypes.func,
};

const defaultProps = {
  disabled: false,
};

const CheckboxInputWrapper = styled.div`
  height: 15px;
  width: 15px;
  border: 1px solid ${(props) => props.theme.colors.brandBlueRegular};
  border-radius: 2px;
  position: relative;
  box-sizing: border-box;
  margin-right: 6px;
`;

CheckboxInputWrapper.propTypes = { theme: PropTypes.object };
CheckboxInputWrapper.defaultProps = { theme: newTheme };

function CheckboxInput({ checked, onChange, id, disabled }) {
  return (
    <CheckboxInputWrapper>
      <CheckboxInputControl checked={checked} disabled={disabled} id={id} onChange={onChange} />
      <CheckboxInputFill />
    </CheckboxInputWrapper>
  );
}

CheckboxInput.propTypes = propTypes;
CheckboxInput.defaultProps = defaultProps;

export default CheckboxInput;
