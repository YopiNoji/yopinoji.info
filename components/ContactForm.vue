<template>
  <div class="contact">
    <form v-show="display == 0">
      <div class="contact-form">
        <input
          v-model="form.name.contents"
          class="contact-form-text"
          type="text"
          placeholder=""
        />
        <label class="contact-form-label">Name</label>
        <span class="contact-form-error">{{ form.name.error }}</span>
      </div>
      <div class="contact-form">
        <input
          v-model="form.organization.contents"
          class="contact-form-text"
          type="text"
          placeholder=""
        />
        <label class="contact-form-label">Organization</label>
        <span class="contact-form-error">{{ form.organization.error }}</span>
      </div>
      <div class="contact-form">
        <input
          v-model="form.email.contents"
          class="contact-form-text"
          type="email"
          placeholder=""
        />
        <label class="contact-form-label">Email</label>
        <span class="contact-form-error">{{ form.email.error }}</span>
      </div>
      <div class="contact-form">
        <input
          v-model="form.subject.contents"
          class="contact-form-text"
          type="text"
          placeholder=""
        />
        <label class="contact-form-label">Subject</label>
        <span class="contact-form-error">{{ form.subject.error }}</span>
      </div>
      <div class="contact-form">
        <textarea
          v-model="form.message.contents"
          class="contact-form-textarea"
          type="textarea"
          placeholder=""
        />
        <label class="contact-form-label">Message</label>
        <span class="contact-form-error">{{ form.message.error }}</span>
      </div>
      <div class="contact-form">
        <button class="contact-form-button" type="button" @click="formCheck()">
          Send
        </button>
      </div>
    </form>

    <div v-show="display == 1">
      <div class="contact-confirm">
        <label>Name:</label>
        <span>{{ form.name.contents }}</span>
      </div>
      <div class="">
        <label>Organization:</label>
        <span>{{ form.organization.contents }}</span>
      </div>
      <div class="">
        <label>Email:</label>
        <span>{{ form.email.contents }}</span>
      </div>
      <div class="">
        <label>Subject:</label>
        <span>{{ form.subject.contents }}</span>
      </div>
      <div class="">
        <label>Message:</label>
        <span>{{ form.message.contents }}</span>
      </div>
      <p>Are you sure you want to send this messages?</p>
      <div class="">
        <button class="contact-form-button" type="button" @click="sendMail()">
          Send
        </button>
      </div>
    </div>

    <div v-show="display == 2">
      <p>{{ sendresult }}</p>
    </div>
  </div>
</template>

<script>
import firebase from '~/plugins/firebase.js'

export default {
  data: () => ({
    form: {
      name: { contents: '', error: '' },
      organization: { contents: '', error: '' },
      email: { contents: '', error: '' },
      subject: { contents: '', error: '' },
      message: { contents: '', error: '' }
    },
    display: 0,
    sendresult: ''
  }),
  methods: {
    sendMail() {
      const form = this.form
      const sendMail = firebase.functions().httpsCallable('sendMail')
      sendMail({ form })
        .then((response) => {
          this.sendresult = 'Your mail has been sent successfuly.'
          this.display = 2
        })
        .catch((error) => {
          this.sendresult = 'Some error occured'
          alert(error)
          this.display = 2
        })
    },
    formCheck() {
      const form = this.form
      let formCheckResult = true
      this.emptyCheck(form.name.contents) // eslint-disable-line
        ? (form.name.error = '')
        : ((form.name.error = 'Please, Enter your name'),
          (formCheckResult = false))
      this.emptyCheck(form.email.contents) // eslint-disable-line
        ? (form.email.error = '')
        : ((form.email.error = 'Please, Enter your Email'),
          (formCheckResult = false))
      this.emailCheck(form.email.contents) // eslint-disable-line
        ? (form.email.error = '')
        : ((form.email.error = 'Please, Rewrite your Email'),
          (formCheckResult = false))
      this.emptyCheck(form.subject.contents) // eslint-disable-line
        ? (form.subject.error = '')
        : ((form.subject.error = 'Please, Enter mail subject'),
          (formCheckResult = false))
      this.emptyCheck(form.message.contents) // eslint-disable-line
        ? (form.message.error = '')
        : ((form.message.error = 'Please, Enter your message'),
          (formCheckResult = false))
      if (formCheckResult) {
        this.display = 1
      }
    },
    emptyCheck(contents) {
      if (!contents) {
        return false
      } else {
        return true
      }
    },
    emailCheck(mail) {
      const mailRegex1 = new RegExp(
        "(?:[-!#-'*+/-9=?A-Z^-~]+\.?(?:\.[-!#-'*+/-9=?A-Z^-~]+)*|\"(?:[!#-\[\]-~]|\\\\[\x09 -~])*\")@[-!#-'*+/-9=?A-Z^-~]+(?:\.[-!#-'*+/-9=?A-Z^-~]+)*" // eslint-disable-line
      )
      const mailRegex2 = new RegExp('^[^\@]+\@[^\@]+$') // eslint-disable-line
      if (mail.match(mailRegex1) && mail.match(mailRegex2)) {
        if (
          mail.match(
            /[^a-zA-Z0-9\!\"\#\$\%\&\'\(\)\=\~\|\-\^\\\@\[\;\:\]\,\.\/\\\<\>\?\_\`\{\+\*\} ]/ // eslint-disable-line
          )
        ) {
          return false
        }
        if (!mail.match(/\.[a-z]+$/)) {
          return false
        }
        return true
      } else {
        return false
      }
    }
  }
}
</script>

<style scoped>
.contact {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin: 0 auto;
}
.contact-form {
  position: relative;
  margin: 0 auto;
  width: 400px;
  padding: 12px 0px;
}
.contact-form-label {
  position: absolute;
  z-index: -1;
  top: 4px;
  left: 0;
  width: 100%;
  transition: 0.3s;
  letter-spacing: 0.5px;
  color: #aaaaaa;
  text-align: left;
}
.contact-form-text {
  width: 100%;
  border: none;
  border-bottom: 2px solid #000;
  background: transparent;
  margin: 0 auto;
  transition: all 1s ease-in-out;
}
.contact-form-textarea {
  width: 100%;
  border: none;
  border-bottom: 2px solid #000;
  background: transparent;
  margin: 0 auto;
  transition: all 1s ease-in-out;
}
.contact-form-error {
  position: absolute;
  color: #da3c41;
  top: -12px;
  right: 0;
  font-size: 10px;
}
.contact-form-button {
  position: relative;
  padding: 1em 1.5em;
  border: none;
  background-color: transparent;
  cursor: pointer;
  outline: none;
  font-size: 18px;
  margin: 1em 0.8em;
  color: #435a6b;
}
.contact-form-button::after {
  content: '';
  display: block;
  position: absolute;
  width: 20%;
  height: 20%;
  border: 2px solid;
  transition: all 0.6s ease;
  border-radius: 2px;
  bottom: 0;
  right: 0;
  border-top-color: transparent;
  border-left-color: transparent;
  border-bottom-color: #435a6b;
  border-right-color: #435a6b;
}
.contact-form-button::before {
  content: '';
  display: block;
  position: absolute;
  width: 20%;
  height: 20%;
  border: 2px solid;
  transition: all 0.6s ease;
  border-radius: 2px;
  top: 0;
  left: 0;
  border-bottom-color: transparent;
  border-right-color: transparent;
  border-top-color: #435a6b;
  border-left-color: #435a6b;
}
.contact-form-button:hover:after,
.contact-form-button:hover:before {
  border-bottom-color: #435a6b;
  border-right-color: #435a6b;
  border-top-color: #435a6b;
  border-left-color: #435a6b;
  width: 100%;
  height: 100%;
}

.contact-form-text:focus ~ .contact-form-label {
  font-size: 12px;
  top: -12px;
  color: #435a6b;
}
.contact-form-textarea:focus ~ .contact-form-label {
  font-size: 12px;
  top: -12px;
  color: #435a6b;
}

@media screen and (max-width: 480px) {
  .contact-form {
    width: 200px;
    margin: 0 auto;
  }
}
</style>
