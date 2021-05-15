import PropTypes from 'prop-types'

export const Button = ({color, text}) => {
    return  <button style={{ backgroundColor: color}} className='btn'>
                Add
            </button>

}

Button.defaultProps = {
    color: 'steelblue'
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
}

export default Button;