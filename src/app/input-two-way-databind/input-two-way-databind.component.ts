import { Component, style } from "@angular/core";

@Component({
    selector : "input-two-way-databind",
    templateUrl : "./input-two-way-databind.component.html",
    styleUrls: ["./input-two-way-databind.component.css"]
})

export class InputTwoWayDatabindComponent {
    username = '';
    showDetail = true;
    _logClicks = new Array();
    
    public onResetClick(){
        this.username = '';
    }

    public onShowDetailClick(){
        this.showDetail = !this.showDetail;
        this._logClicks.push(new Date().getTime());
    }

    public get logClicks(){
        let result = new Array();
        return result = this._logClicks;
    }
}