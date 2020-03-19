import { TOKEN_KEY } from '../../config';

const state = {
    token: window.localStorage.getItem(TOKEN_KEY) || '',
};

const mutations = {
    setToken(state, { token }) {
        state.token = token;
    },
    rmToken(state) {
        state.token = '';
    // localStorage.removeItem("token");
    }
};

const actions = {
    setToken({ commit }, { token }) {
    // do something async
    commit('setToken', { token });
    window.localStorage.setItem(TOKEN_KEY, token);
    },
    rmToken({ commit }) {
    commit('rmToken');
    }
};

export default {
    state,
    mutations,
    actions
};