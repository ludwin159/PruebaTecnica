import styled from "styled-components";

const ui = {
  InputGroup: styled.div`
    ${({ collapseLabel }) =>
      collapseLabel
        ? `
        label {
            padding-bottom: 8px;
        }
    `
        : ''}

    ${({ collapseLegend }) =>
      collapseLegend
        ? `
        .icon-legend {
            padding-top: 8px;
        }
    `
        : ''}
  `,

  InputGroupLabel: styled.label`
    display: block;
    font-size: 16px;
    line-height: 20px;
    color: var(--color-light-Text-Primary);
    font-weight: 500;
  `,

  InputGroupContainer: styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    border-radius: 8px;
    background-color: #000000;
    color: #fff;
    outline: none;
    border: 1px solid red;
    overflow: hidden;

    &:focus-within {
      border: 1px solid red;
      background-color: #fff;
      color: #000000;
    }

    span {
      display: flex;
    }

    .icon-left {
      margin-left: 20px;
    }

    .icon-right {
      margin-right: 20px;
    }

    .icon-password {
      opacity: 0.25;
    }
  `,

  InputGroupInput: styled.input`
    width: 100%;
    border: 0;
    font-size: 16px;
    padding: 12px 16px;
    background: none;
    outline: none;
    height: 48px;

    ::placeholder {
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      color: #fff;
    }

    ::selection {
      background: #0091dc;
      color: white;
    }
    caret-color: #0091dc;
  `
}

const Search = ({
  idInput,
  typeInput = 'text',
  nameInput,
  textPlaceholder,
  required,
  valueInput,
  iconInputLeft,
  iconInputRight,
  iconHint,
  textLabel,
  textHint,
  iconPositionLeft,
  iconPositionRight,
  disabled,
  state = 'default',
  collapseLabel = false,
  collapseLegend,
  className,
  password,
  togglePassword,
  onChange,
  ...rest
}) => {
  return (
    <ui.InputGroup collapseLabel collapseLegend className={className}>
      {collapseLabel && <ui.InputGroupLabel htmlFor={idInput}>{textLabel}</ui.InputGroupLabel>}
      <ui.InputGroupContainer state={state}>
        {iconPositionLeft && <span className="icon-left">Aqui va el icono left</span>}

        <ui.InputGroupInput
          state={state}
          type={typeInput}
          id={idInput}
          name={nameInput}
          placeholder={textPlaceholder}
          required={required}
          value={valueInput}
          onChange={onChange}
          disabled={disabled}
          {...rest}
        />
        {iconPositionRight &&
          <span className="icon-right">
            RightICon
          </span>}
      </ui.InputGroupContainer>
    </ui.InputGroup>
  ) 
};

export default Search;
