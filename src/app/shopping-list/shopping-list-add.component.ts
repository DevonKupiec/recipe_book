import { Component, Input, OnChanges, Output, ViewContainerRef } from "@angular/core";
import { ShoppingListService } from "./shopping-list.service";
import { Ingredient } from "../shared/ingredient";
import { EventEmitter } from "@angular/forms/src/facade/async";
import { ToastsManager } from "ng2-toastr";
import { FormGroup } from "@angular/forms";

@Component({
               selector: 'rb-shopping-list-add',
               templateUrl: './shopping-list-add.component.html',
           })
export class ShoppingListAddComponent implements OnChanges {
    @Input() item: Ingredient;
    @Output() cleared = new EventEmitter();
    isAdd = true;

    constructor(private sls: ShoppingListService,
                public toastr: ToastsManager,
                vcr: ViewContainerRef) {
        this.toastr.setRootViewContainerRef(vcr);
    }

    ngOnChanges(changes) {
        if (changes.item.currentValue === null) {
            this.isAdd = true;
            this.item = { name: null, amount: null };
        } else {
            this.isAdd = false;
        }
    }

    onSubmit(form: FormGroup) {
        let ingredient = form.value;
        const newIngredient = new Ingredient(ingredient.name, ingredient.amount);

        if (!this.isAdd) {
            this.sls.editItem(this.item, newIngredient);
            this.onClear();
            this.toastr.success('Item edited', 'Success!');

        } else {
            this.item = newIngredient;
            this.sls.addItem(this.item);
            this.onClear();
            this.toastr.success('Item added', 'Success!');
        }
    }

    onDelete() {
        this.sls.deleteItem(this.item);
        this.onClear();
        this.toastr.success('Item deleted', 'Success!');
    }

    onClear() {
        this.isAdd = true;
        this.cleared.emit(null);
    }

}

