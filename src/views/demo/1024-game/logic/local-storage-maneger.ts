window.fakeStorage = {
  _data: {},
  setItem: function (id: any, val: any) {
    this._data[id] = String(val);
  },
  getItem: function (id: any) {
    return this._data.hasOwnProperty(id) ? this._data[id] : undefined;
  },
  removeItem: function (id: any) {
    return delete this._data[id];
  },
  clear: function () {
    this._data = {};
  },
};

interface LocalStorageManager {
  bestScoreKey: string;
  gameStateKey: string;
  storage: Storage;
}

class LocalStorageManager {
  constructor() {
    this.bestScoreKey = "bestScore"; // 最佳分数记录
    this.gameStateKey = "gameState"; // 游戏状态记录
    let supported = this.localStorageSupported();
    this.storage = supported ? window.localStorage : window.fakeStorage;
  }

  localStorageSupported() {
    let testKey = "test";
    try {
      window.localStorage.setItem(testKey, "1");
      window.localStorage.removeItem(testKey);
      return true;
    } catch (error) {
      return false;
    }
  }

  getBestScore() {
    return this.storage.getItem(this.bestScoreKey) || 0;
  }

  setBestScore(score: string) {
    this.storage.setItem(this.bestScoreKey, score);
  }

  getGameState() {
    let state = this.storage.getItem(this.gameStateKey);
    return state? JSON.parse(state) : null
  }

  setGameState(state: any) {
    this.storage.setItem(this.gameStateKey, JSON.stringify(state));
  }

  removeGameState() {
    this.storage.removeItem(this.gameStateKey);
  }
}

const localStorageManager = new LocalStorageManager();
export default localStorageManager