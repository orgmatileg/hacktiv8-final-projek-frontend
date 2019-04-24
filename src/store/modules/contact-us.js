import axios from "../../config/api";

const state = {
  contacts: [],
  contact: {
    contact_us_id: "",
    full_name: "",
    email: "",
    subject: "",
    message: "",
    created_at: ""
  },
  contactCount: 0
};

const getters = {
  getContact: state => state.contact,
  getContacts: state => state.contacts,
  getContactCount: state => state.contactCount
};

const actions = {
  fetchContacts: async ({ commit }, offset) => {
    try {
      const res = await axios.get("contact-us", {
        params: {
          offset
        }
      });
      const { payload, count } = res.data;

      if (payload) {
        commit("setContactsCount", count);
        commit("setContacts", payload);
      }
    } catch (err) {
      throw err;
    }
  },
  fetchContactByID: async ({ commit }, id) => {
    try {
      const res = await axios.get(`contact-us/${id}`);
      const { payload } = res.data;

      commit("setContact", payload);
    } catch (err) {
      throw err;
    }
  }
};

const mutations = {
  setContact: (state, contact) => (state.contact = contact),
  setContacts: (state, contacts) => (state.contacts = contacts),
  setContactsCount: (state, count) => (state.contactCount = count)
};

export default {
  state,
  getters,
  actions,
  mutations
};
