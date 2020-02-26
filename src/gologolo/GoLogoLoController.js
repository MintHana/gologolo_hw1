import AppsterController from '../appster/AppsterController.js'
import { GoLogoLoGUIId, GoLogoLoCallback, GoLogoLoHTML } from './GoLogoLoConstants.js';

export default class GoLogoLoController
 extends AppsterController {
    constructor() {
        super();
    }

    registerEventHandlers() {
        this.registerEventHandler(GoLogoLoGUIId.GOLOGOLO_EDIT_TEXT_BUTTON, GoLogoLoHTML.CLICK, this[GoLogoLoCallback.GOLOGOLO_PROCESS_EDIT_TEXT]);
        this.registerEventHandler(GoLogoLoGUIId.GOLOGOLO_EDIT_TEXT_MODAL_ENTER_BUTTON, GoLogoLoHTML.CLICK, this[GoLogoLoCallback.GOLOGOLO_PROCESS_UPDATE_TEXT]);
        this.registerEventHandler(GoLogoLoGUIId.GOLOGOLO_EDIT_TEXT_MODAL_CANCEL_BUTTON, GoLogoLoHTML.CLICK, this[GoLogoLoCallback.GOLOGOLO_PROCESS_HIDE_MODAL]);
        this.registerEventHandler(GoLogoLoGUIId.GOLOGOLO_FONT_SIZE_SLIDER, GoLogoLoHTML.CLICK, this[GoLogoLoCallback.GOLOGOLO_PROCESS_FONT_SIZE]);
        this.registerEventHandler(GoLogoLoGUIId.GOLOGOLO_BORDER_RADIUS_SLIDER, GoLogoLoHTML.CLICK, this[GoLogoLoCallback.GOLOGOLO_PROCESS_BORDER_RADIUS]);
        this.registerEventHandler(GoLogoLoGUIId.GOLOGOLO_TEXT_COLOR_PICKER, GoLogoLoHTML.INPUT, this[GoLogoLoCallback.GOLOGOLO_PROCESS_TEXT_COLOR]);
        this.registerEventHandler(GoLogoLoGUIId.GOLOGOLO_BACKGROUND_COLOR_PICKER, GoLogoLoHTML.INPUT, this[GoLogoLoCallback.GOLOGOLO_PROCESS_BACKGROUND_COLOR]);
        this.registerEventHandler(GoLogoLoGUIId.GOLOGOLO_BORDER_COLOR_PICKER, GoLogoLoHTML.INPUT, this[GoLogoLoCallback.GOLOGOLO_PROCESS_BORDER_COLOR]);
        this.registerEventHandler(GoLogoLoGUIId.GOLOGOLO_BORDER_THICKNESS_SLIDER, GoLogoLoHTML.CLICK, this[GoLogoLoCallback.GOLOGOLO_PROCESS_BORDER_THICKNESS]);
        this.registerEventHandler(GoLogoLoGUIId.GOLOGOLO_PADDING_SLIDER, GoLogoLoHTML.CLICK, this[GoLogoLoCallback.GOLOGOLO_PROCESS_PADDING]);
        this.registerEventHandler(GoLogoLoGUIId.GOLOGOLO_MARGIN_SLIDER, GoLogoLoHTML.CLICK, this[GoLogoLoCallback.GOLOGOLO_PROCESS_MARGIN]);
    }

    processEditText =() => {
        document.getElementById(GoLogoLoGUIId.GOLOGOLO_EDIT_TEXT_MODAL_TEXTFIELD).value = this.model.getOrigin();
        this.model.view.showEditText();
    }

    processHideModal = () => {
        this.model.view.hideEditText();
    }

    processUpdateText = () => {
        this.model.updateEditText();
    }
    
    processFontSize = () => {
        this.model.updateEditSize();
    }

    processTextColor = () => {
        this.model.updateTextColor();
    }

    processBackgroundColor = () => {
        this.model.updateBackgroundColor();
    }

    processBorderColor = () => {
        this.model.updateBorderColor();
    }

    processBorderRadius = () => {
        this.model.updateBorderRadius();
    }

    processBorderThickness = () => {
        this.model.updateBorderThickness();
    }

    processPadding = () => {
        this.model.updatePadding();
    }

    processMargin = () => {
        this.model.updateMargin();
    }
}