// Import PolymerElement class
import {PolymerElement, html} from '../../node_modules/@polymer/polymer/polymer-element.js';
class profileCard extends PolymerElement {
    static get template() {
        return html `
            <style>
                .card {
                  width: 100%;
                  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                  text-align: center;
                  border: solid lightskyblue;
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

                .cell {
                    display: inline-block;
                    width: 30%;
                }
            </style>
            <div class="card">
                <div class="cell"><p><slot name="name">{{user.firstName}}</slot></p></div>
                <div class="cell"><p><slot name="title">$0</slot></p></div>
                <div class="cell"><p><slot name="school">$0</slot></p></div>
            </div>
        `;

    }
    // Element class can define custom element reacti        console.log('profile-card created!');ons
    connectedCallback() {
        super.connectedCallback();

    }
    static get properties() {
        return {
            mode: String,

            user: {
                type: Array,
                value: [],
                notify: true
            }
        }
    }

    ready() {
        super.ready();
    }
}

// Associate the new class with an element name
customElements.define('profile-card', profileCard);