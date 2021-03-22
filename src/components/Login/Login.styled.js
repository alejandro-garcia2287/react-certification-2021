import styled from 'styled-components';
import { Modal } from 'react-bootstrap';

const StyledModal = styled(Modal)`
  .modal-content {
    background: ${(props) => props.theme.cardBackgroundColor};
    border-color: ${(props) => props.theme.cardBorderColor};
    color: ${(props) => props.theme.textColor};
  }

  .form-control {
    background: ${(props) => props.theme.cardBackgroundColor};
    color: ${(props) => props.theme.textColor};
  }
`;

export default StyledModal;
