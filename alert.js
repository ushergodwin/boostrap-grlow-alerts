/**
 * Boostrap 4 Toast Alerts
 */
class CINEMUG_ALERTS {
    top_mergin = 1
    bottom_mergin = 5
    constructor(placement = {
        position: 'Middle_center'
    }) {
        this._position = placement.position.toUpperCase()
        this._placement = this.placement[this._position]
        if (typeof this._placement === 'undefined') {
            this._position = "TOP_RIGHT"
            this._placement = this.placement[this._position]
        }

        this._position = this.screenSize($(window).width(), this._position)

        const maincontainer = document.createElement('section')
        const alertContainer = document.createElement('section')
        alertContainer.classList.add('cug_alert', 'clearfix')
        maincontainer.setAttribute('style', this._placement)
        let classList = this.placementClass[this._position]
        classList = classList.split(' ')
        maincontainer.classList.add(...classList)
        maincontainer.style.zIndex = 10000
        maincontainer.appendChild(alertContainer)
        $("body").append(maincontainer)
    }

    screenSize(size, position = '') {
            if (size <= 700) {
                if (position.indexOf('TOP_RIGHT') > -1) {
                    return "TOP_CENTER"
                } else if (position.indexOf('BOTTOM_RIGHT') > -1) {
                    return "BOTTOM_CENTER"
                }
            }
            return position
        }
        /**
         * @private modalType
         */
    modalType = {
        'success': {
            background: 'color:#155724;background-color:#d4edda;border-color:#c3e6cb;',
            icon: "<i class='fas fa-check-circle text-success'></i>"
        },
        'error': {
            background: 'color:#856404;background-color:#fff3cd;border-color:#ffeeba;',
            icon: "<i class='fas fa-exclamation-triangle text-warning'></i>"
        },
        info: {
            background: 'background-color:#f8f9fa!important;color:#343a40!important;',
            icon: "<i class='fas fa-info text-info-circle'></i>"
        }
    }

    placement = {
        'BOTTOM_RIGHT': `position: fixed; bottom: ${this.bottom_mergin}%;width:100%;`,
        'BOTTOM_CENTER': `position: fixed; bottom: ${this.bottom_mergin}%;width:100%;`,
        'BOTTOM_LEFT': `position: fixed; bottom: ${this.bottom_mergin}%;width:100%;`,
        'TOP_RIGHT': `position: fixed; top: ${this.top_mergin}%;width:100%;`,
        'TOP_LEFT': `position: fixed; top: ${this.top_mergin}%;width:100%;`,
        'TOP_CENTER': `position: fixed; top: ${this.top_mergin}%;width:100%;`,
        'MIDDLE_RIGHT': `position: fixed; bottom: 50%;width:100%;`,
        'MIDDLE_CENTER': `position: fixed; bottom: 50%;width:100%;`,
        'MIDDLE_LEFT': `position: fixed; bottom: 50%;width:100%;`,
    }

    placementClass = {
        'BOTTOM_RIGHT': 'd-flex justify-content-end',
        'BOTTOM_CENTER': 'd-flex justify-content-center',
        'BOTTOM_LEFT': 'd-flex justify-content-start',
        'TOP_RIGHT': 'd-flex justify-content-end',
        'TOP_LEFT': 'd-flex justify-content-start',
        'TOP_CENTER': 'd-flex justify-content-center',
        'MIDDLE_RIGHT': 'd-flex justify-content-end',
        'MIDDLE_CENTER': 'd-flex justify-content-center',
        'MIDDLE_LEFT': 'd-flex justify-content-start',
    }

    /**
     * @private create
     * @param {*} text 
     * @param {*} title 
     * @param {*} type 
     */
    create(text, title, type) {
        const alertBox = ` 
        <div class = "toast modal-toast shadow" style = "${type.background}">
            <div class = "toast-header" style = "${type.background}">
                <strong class="mr-auto"> ${type.icon} &nbsp;${title} </strong>  
                <small> just now </small>  
                <button type="utton" class ="ml-2 mb-1 close" data-dismiss="toast">
                &times; </button>  
            </div> 
            <div class="toast-body">
                ${ text }
                <div class="bar"></div>  
            </div> 
        </div>`
        $('.cug_alert').append(alertBox)
    }

    render(options) {
        let modal = $('.modal-toast')
        const thisModal = modal[modal.length - 1]
        $(thisModal).fadeIn('ease', () => {
            $(thisModal).toast({
                delay: options.timeout,
                autohide: false
            })
            $(thisModal).toast('show')
            $(thisModal).children('.toast-body').children('.bar').addClass('progress').width($('.toast-body').width()).animate({
                width: '0'
            }, options.timeout);
            setTimeout(() => {
                $(thisModal).fadeOut('slow', () => {
                    thisModal.remove()
                })
            }, options.timeout);
        })
    }

    /**
     * 
     * @param {*} message informative message
     * @param {*} options options object
     * defaults to { title: 'Notification', timeout: 5000 }
     * @returns alert toast
     */
    info(message = '', options = { title: 'Notification', timeout: 5000 }) {
        this.create(message, options.title, this.modalType.info)
        return this.render(options)
    }

    /**
     * 
     * @param {*} message success message
     * @param {*} options options object 
     * defaults to { title: 'Notification', timeout: 5000 }
     * @returns alert toast
     */
    success(message = '', options = { title: 'Notification', timeout: 5000 }) {
        this.create(message, options.title, this.modalType.success)
        return this.render(options)
    }

    /**
     * An error Notification
     * @param {*} message error message
     * @param {*} options options object
     * defaults to { title: 'Notification', timeout: 5000 }
     * @returns 
     */
    error(message = '', options = { title: 'Notification', timeout: 5000 }) {
        this.create(message, options.title, this.modalType.error)
        return this.render(options)
    }
}

/**
 * 
 * @param {Object} config 
 * placement config object
 * 
 * defaults to { position: 'TOP_RIGHT' }
 * 
 * Available positions
 * 
 * TOP_LEFT
 * 
 * TOP_CENTER
 * 
 * TOP_RIGHT
 * 
 * MIDDLE_LEFT 
 * 
 * MIDDLE_CENTER
 * 
 * MIDDLE_RIGHT
 * 
 * BOTTOM_LEFT
 * 
 * BOTTOM_CENTER
 * 
 * BOTTOM_RIGT
 * 
 * @returns CINEMAUG_ALERTS
 */
const useAlert = (config = { position: 'TOP_RIGHT' }) => new CINEMUG_ALERTS(config)