type TItemConfig = {
  url: string;
  server: string;
}

type TConfig = {
  development: TItemConfig,
  production: TItemConfig
}

const CONFIG: TConfig = {
  development: {
    url: 'http://192.168.31.37:8088/',
    server: 'http://192.168.31.37:4112/',
  },
  production: {
    url: 'https://botobro.ru/',
    server: 'https://botobro.ru/',
  },
};

export default CONFIG;
