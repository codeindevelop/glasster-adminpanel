import React from "react";
import {IntlProvider} from "react-intl";
import {useLang} from "./SiteLangProvider";
import "@formatjs/intl-listformat/polyfill";
import "@formatjs/intl-listformat/locale-data/en";
import "@formatjs/intl-listformat/locale-data/fa";
import "@formatjs/intl-listformat/locale-data/de";
import "@formatjs/intl-listformat/locale-data/es";
import "@formatjs/intl-listformat/locale-data/fr";
import "@formatjs/intl-listformat/locale-data/ja";
import "@formatjs/intl-listformat/locale-data/zh";

import deMessages from "./messages/de";
import faMessages from "./messages/fa";
import enMessages from "./messages/en";
import esMessages from "./messages/es";
import frMessages from "./messages/fr";
import jaMessages from "./messages/ja";
import zhMessages from "./messages/zh";

const allMessages = {
  fa: faMessages,
  de: deMessages,
  en: enMessages,
  es: esMessages,
  fr: frMessages,
  ja: jaMessages,
  zh: zhMessages
};

export function I18nProvider({ children }) {
  const locale = useLang();
  const messages = allMessages[locale];

  return (
    <IntlProvider locale={locale} messages={messages}>
      {children}
    </IntlProvider>
  );
}