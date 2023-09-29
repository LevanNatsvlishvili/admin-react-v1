import { useCallback } from "react";

export const locales = [
  { displayName: "Georgian", code: "ka", isDefault: true },
  { displayName: "English", code: "en" },
];

export const getDefaultLanguageCode = () =>
  locales.find((x) => x.isDefault).code;

export const findByLocaleCode = (xs, code) =>
  xs ? xs.find((x) => x.languageCode && x.languageCode === code) || {} : {};

export const useValuesUpdaterByLocale = (selectedLocaleCode) => {
  return useCallback(
    (field, value, multiLanguage, values) => {
      const obj = { ...values };

      if (multiLanguage) {
        const selectedByLocale = findByLocaleCode(
          obj.translations,
          selectedLocaleCode
        );
        if (selectedByLocale && Object.keys(selectedByLocale).length > 0) {
          selectedByLocale[field] = value;
        } else {
          obj.translations = [
            ...(obj.translations || []),
            { languageCode: selectedLocaleCode, [field]: value },
          ];
        }
      } else obj[field] = value;
      return obj;
    },
    [selectedLocaleCode]
  );
};
