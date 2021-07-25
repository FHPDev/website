import { Component, createRef } from 'react'
import ReactDOM from 'react-dom'
import StyledModal from './ModalStyles'
import { focusTrap } from './Utilities'

const portalRoot = typeof document !== `undefined` ? document.getElementById('modal-portal') : null

class Modal extends Component {
    el: any
    ModalRef: any

    constructor(props: {} | Readonly<{}>) {
        super(props)
        this.ModalRef = createRef();
        this.el = typeof document !== `undefined` ? document.createElement('div') : null
    }

    componentDidMount() {
        { portalRoot && portalRoot.appendChild(this.el) }
        focusTrap(this.ModalRef.current);
    }

    componentWillUnmount() {
        { portalRoot && portalRoot.removeChild(this.el) }
    }

    handleClick = () => {
        this.props.click();
    }

    render() {
        const { children } = this.props

        const modalLayout = (
            <>
                <div className="modal-overlay" onClick={() => this.handleClick()} />
                <StyledModal role="dialog" ref={this.ModalRef}>
                    <button className="modal-close" onClick={() => this.handleClick()}>
                        <span className="sr-only">close</span>
                    </button>
                    {children}
                </StyledModal>
            </>
        )
        if (this.el) {
            return ReactDOM.createPortal(modalLayout, this.el)
        } else {
            return null
        }
    }
}

export default Modal;