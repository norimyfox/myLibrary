import $ from "../core";

$.prototype.setAttr = function(attribute, value = "") {
    for (let i = 0; i < this.length; i++) {
        if (!this[i].setAttribute) {
            return this;
        }
        this[i].setAttribute(attribute, value);
    }
    return this;
};

$.prototype.getAttr = function(attribute, value) {
    for (let i = 0; i < this.length; i++) {
        if (!this[i].getAttribute) {
            return this;
        }

        this[i].getAttribute(attribute, value);
    }
    return this;
};

$.prototype.toggleAttr = function(attribute, value = "true") {
    for (let i = 0; i < this.length; i++) {
        if (!this[i].toggleAttribute) {
            return this;
        }

        this[i].toggleAttribute(attribute, value);
    }
    return this;
};