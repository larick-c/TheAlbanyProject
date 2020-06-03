// Import PolymerElement class
import { PolymerElement, html } from '../../node_modules/@polymer/polymer/polymer-element.js';
import '../../node_modules/@polymer/paper-dialog/paper-dialog.js';

class usersToRemoveDialog extends PolymerElement {
  static get template() {
    return html`
            <style>
                .card {
                  text-align: center;
                }

                .title {
                  color: grey;
                  font-size: 18px;
                }

                button {
                  border: none;
                  outline: 0;
                  display: inline-block;
                  padding: 8px;
                  color: white;
                  background-color: #000;
                  text-align: center;
                  cursor: pointer;
                  width: 100%;
                  font-size: 18px;
                }

                a {
                  text-decoration: none;
                  font-size: 22px;
                  color: black;
                }

                button:hover, a:hover {
                  opacity: 0.7;
                }
            </style>
            <paper-dialog id="usersToRemoveDialog">
                <div class="card">
                    <div>Who would you like to remove?</div>
                    <div>
                        <template id="userTemplate" is="dom-repeat" items="{{users}}" as="user">
                            <div class="grid-y">
                                <div class="cell shrink">
                                    <div slot="name"><paper-checkbox on-click="addToList">{{user.name}}</paper-checkbox></div>
                                </div>
                            </div>
                        </template>
                    <div>
                </div>
            </paper-dialog>

        `;
  }

  static get properties() {
    return {
      mode: String,
      users: {
        type: Array,
        value: [],
        notify: true
      },
      usersToRemove: {
        type: Array,
        value: [],
        notify: true
      }
    };
  } // Element class can define custom element reacti        console.log('profile-card created!');ons


  connectedCallback() {
    super.connectedCallback();
  }

  ready() {
    super.ready();
    this.users = JSON.parse(localStorage.getItem('items'));
  }

  open() {
    //        this.$.usersToRemoveDialog.open();
    localStorage.clear(); //        this.$.userTemplate.render();

    this.parentElement.querySelector('#mainContainer').ready();
  }

  close() {
    this.$.usersToRemoveDialog.close();
  }

  addToList(e, target) {
    console.log("Add to list");

    if (e.currentTarget.checked === true) {
      this.usersToRemove.push({
        name: e.currentTarget.innerText
      });
    } else {
      this.usersToRemove.forEach(function (item, i) {
        console.log(item);
      });
      this.usersToRemove.splice();
    }
  }

  saveUser() {
    var user = new Object();
    user.name = this.$.nameInput.value;
    user.title = this.$.titleInput.value;
    user.school = this.$.schoolInput.value;
    var localUsers = JSON.parse(localStorage.getItem('items'));

    if (localUsers !== null & localStorage.length !== 0) {
      localUsers.push(user);
      localStorage.setItem('items', JSON.stringify(localUsers));
    } else {
      var users = [];
      users.push(user);
      localStorage.setItem('items', JSON.stringify(users));
    }

    var template = document.querySelector('#mainContainer');
    template.ready();
  }

  clearLocalStorage() {
    localStorage.clear();
  }

} // Associate the new class with an element name


customElements.define('users-to-remove-dialog', usersToRemoveDialog);