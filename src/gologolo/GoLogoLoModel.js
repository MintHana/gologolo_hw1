import AppsterModel from '../appster/AppsterModel.js'
import GoLogoLoLogo from './GoLogoLoLogo.js'
import {GoLogoLoGUIId} from './GoLogoLoConstants.js'

export default class GoLogoLoModel extends AppsterModel {
    constructor() {
        super();
        this.currentWork = null;
    }

    createNewWork(workName) {
        let newRandomText = new GoLogoLoLogo(workName);
        return newRandomText;
    }

    loadWorkData(workToLoad) {
        console.log("load " + workToLoad.getName());
    }

    makeColor(colorData) {
        return "rgb(" + colorData.red + ", " + colorData.green + ", " + colorData.blue + ")";
    }

    buildAppWork(workArray, name) {
        let appWork = new GoLogoLoLogo();

        // FIND THE WORK DATA FROM THE JSON OBJECT
        for (let i = 0; i < workArray.length; i++) {
            let jsonWork = workArray[i];
            if (jsonWork.name === name) {
                // WE'VE FOUND IT, NOW LOAD ALL OF ITS DATA
                appWork.setName(name);
                appWork.setText(jsonWork.text);
                appWork.setFontSize(jsonWork.font_size);
                appWork.setTextColor(jsonWork.text_color);
                appWork.setBackgroundColor(jsonWork.background_color);
                appWork.setBorderColor(jsonWork.border_color);
                appWork.setBorderRadius(jsonWork.border_radius);
                appWork.setBorderThickness(jsonWork.border_thickness);
                appWork.setBorderStyle(jsonWork.border_style);
                appWork.setPadding(jsonWork.padding);
                appWork.setMargin(jsonWork.margin);
            }
        }

        return appWork;
    }

    getOrigin()
    {
        return this.getCurrentWork().getText();
    }

    updateEditText()
    {
        this.getCurrentWork().setText(document.getElementById(GoLogoLoGUIId.GOLOGOLO_EDIT_TEXT_MODAL_TEXTFIELD).value);
        this.view.updateText(this.getCurrentWork());
        this.view.hideEditText();
    }

    updateEditSize()
    {
        this.getCurrentWork().setFontSize(document.getElementById(GoLogoLoGUIId.GOLOGOLO_FONT_SIZE_SLIDER).value);
        console.log(this.getCurrentWork().getFontSize());
        this.view.updateText(this.getCurrentWork());
    }

    updateTextColor()
    {
        this.getCurrentWork().setTextColor(document.getElementById(GoLogoLoGUIId.GOLOGOLO_TEXT_COLOR_PICKER).value);
        console.log(this.getCurrentWork().getTextColor());
        this.view.updateText(this.getCurrentWork());
    }

    updateBackgroundColor()
    {
        this.getCurrentWork().setBackgroundColor(document.getElementById(GoLogoLoGUIId.GOLOGOLO_BACKGROUND_COLOR_PICKER).value);
        this.view.updateText(this.getCurrentWork());
    }

    updateBorderColor()
    {
        this.getCurrentWork().setBorderColor(document.getElementById(GoLogoLoGUIId.GOLOGOLO_BORDER_COLOR_PICKER).value);
        this.view.updateText(this.getCurrentWork());
    }

    updateBorderRadius()
    {
        this.getCurrentWork().setBorderRadius(document.getElementById(GoLogoLoGUIId.GOLOGOLO_BORDER_RADIUS_SLIDER).value);
        this.view.updateText(this.getCurrentWork());
    }

    updateBorderThickness()
    {
        console.log("hi 1");
        this.getCurrentWork().setBorderThickness(document.getElementById(GoLogoLoGUIId.GOLOGOLO_BORDER_THICKNESS_SLIDER).value);
        this.view.updateText(this.getCurrentWork());
    }

    updatePadding()
    {
        console.log("hi 2");
        this.getCurrentWork().setPadding(document.getElementById(GoLogoLoGUIId.GOLOGOLO_PADDING_SLIDER).value);
        this.view.updateText(this.getCurrentWork());
    }

    updateMargin()
    {
        console.log("hi 3");
        this.getCurrentWork().setMargin(document.getElementById(GoLogoLoGUIId.GOLOGOLO_MARGIN_SLIDER).value);
        this.view.updateText(this.getCurrentWork());
    }

}