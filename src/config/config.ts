type TItemConfig = {
  url: string;
}

type TConfig = {
  development: TItemConfig,
  production: TItemConfig
}

const CONFIG: TConfig = {
  development: {
    url: 'http://192.168.31.37:4112/',
  },
  production: {
    url: 'http://151.248.118.164:4112/',
  },
};

export default CONFIG;
