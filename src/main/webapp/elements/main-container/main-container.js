// Import PolymerElement class
import {PolymerElement, html} from '../../node_modules/@polymer/polymer/polymer-element.js';
import '../../node_modules/jquery/dist/jquery.js';
import '../../js/vendor/jquery.js';
import '../../js/vendor/foundation.js';
class mainContainer extends PolymerElement {
    static get template() {
        return html `
            <script type="text/javascript"  src="/node_modules/jquery/dist/jquery.js" ></script>
            <script type="text/javascript"  src="/js/vendor/jquery.js"></script>
            <script type="text/javascript"  src="/js/vendor/foundation.js"></script>
<!--            <link rel = "stylesheet" type = "text/css" href = "../../css/foundation.css" />
            <link rel = "stylesheet" type = "text/css" href = "../../css/global.css" />-->
            <script type="text/javascript"  src="/js/app.js"></script>
            <style>
                :host { color: blue; }
                #body { height: 100%; }
                #body-wrapper { width: 100%; height: 100%; }
                profile-card { height: 25%; width: 25%; }
                .cell { display: inline-block; width: 100%; }
                .grid-y { margin-top: 2%; }
                paper-dialog { position: absolute;  background: Grey; top: 50%; left: 50%; transform: translate(-50%, -50%); }
            </style>
            <iron-ajax id="addUsers"
                url="/web/rest/resource/addUser?firstName={{firstName}}&lastName={{lastName}}"
                method="post"
                handle-as="json"
                on-response="addUsersResponseSuccess"
                on-error="addUsersResponseError">
            </iron-ajax>
            <div id="body">
                <div id="body-wrapper">
                    <div style="text-align: center;">
                        <!--<img style="height: 500px; width: 360px; margin-top: 1%;" src="./images/flowerWarmHome.jpg">-->
                        <div>RSVP</div>
                        <paper-input id="firstNameInput" label="First Name"></paper-input>
                        <paper-input id="lastNameInput" label="Last Name"></paper-input>
                        <paper-button on-click="addUser">Submit</paper-button>
                    </div>
                </div>
            </div>
        `;
    }
    constructor() {
      super();
      this.mode = 'auto';
    }

    static get properties() {
      return {
        firstName: {type: String, value: "", notify: true},
        lastName: {type: String, value: "", notify: true}
      }
    }
    // Element class can define custom element reacti        console.log('profile-card created!');ons
    connectedCallback() {
        super.connectedCallback();
        console.log("connectedCallback()");
    }
    ready() {
        console.log("Main Container ready");
        super.ready();
    }
    addUser() {
        console.log("add user");
        this.firstName = this.$.firstNameInput.value;
        this.lastName = this.$.lastNameInput.value;
        this.$.addUsers.generateRequest();
    }
    addUsersResponseSuccess(){
        console.log("success");
    }
    addUsersResponseError(){
        console.log("Error");
    }
}

// Associate the new class with an element name
customElements.define('main-container', mainContainer);