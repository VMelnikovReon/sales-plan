export default 'define([\'{0}\'], function (App){\n' +
'\tconst Widget = function () {\n' +
'\t\tconst self = this;\n' +
'\t\tself.system = this.system();\n' +
'\t\tself.langs = this.langs;\n' +
'\t\tthis.callbacks = {\n' +
'\t\t\trender() {\n' +
'\t\t\t\tApp.default.render();\n' +
'\t\t\t\treturn true;\n' +
'\t\t\t},\n' +
'\t\t\tinit() {\n' +
'\t\t\t\tApp.default.init();\n' +
'\t\t\t\treturn true;\n' +
'\t\t\t},\n' +
'\t\t\tbind_actions() {\n' +
'\t\t\t\treturn true;\n' +
'\t\t\t},\n' +
'\t\t\tsettings() {\n' +
'\t\t\t\tApp.default.settings();\n' +
'\t\t\t\treturn true;\n' +
'\t\t\t},\n' +
'\t\t\tadvancedSettings() {\n' +
'\t\t\t\tApp.default.advancedSettings();\n' +
'\t\t\t},\n' +
'\t\t\tasync onSave() {\n' +
'\t\t\t\tconst settings = self.get_settings();\n' +
'\t\t\t\tconst userNameInputSetting =\n' +
'\t\t\t\t\tdocument.querySelector(\'[name=client_name]\');\n' +
'\t\t\t\tconst phoneNumberInput = document.querySelector(\'[name=phone_number]\');\n' +
'\t\t\t\tconst termsOfUseField = document.querySelector(\'[name="terms_of_use"]\');\n' +
'\t\t\t\tconst newLead = {\n' +
'\t\t\t\t\tuserName: userNameInputSetting.value,\n' +
'\t\t\t\t\tuserPhone: phoneNumberInput.value,\n' +
'\t\t\t\t\taccount: AMOCRM.constant(\'account\').id,\n' +
'\t\t\t\t\twidgetName: \'"Дни рождения" от REON\',\n' +
'\t\t\t\t\ttermsOfUse: termsOfUseField.value,\n' +
'\t\t\t\t\taccountSubdomain: AMOCRM.constant(\'account\').subdomain,\n' +
'\t\t\t\t\twidgetStatus: settings.active,\n' +
'\t\t\t\t\tclient_uuid: settings.oauth_client_uuid,\n' +
'\t\t\t\t\tenumId: 1070095,\n' +
'\t\t\t\t};\n' +
'\t\t\t\tawait App.default.onSave(newLead);\n' +
'\t\t\t\treturn true;\n' +
'\t\t\t},\n' +
'\t\t\tdestroy() {\n' +
'\t\t\t\treturn true;\n' +
'\t\t\t},\n' +
'\t\t};\n' +
'\t\treturn this;\n' +
'\t};\n' +
'\n' +
'\treturn Widget;\n' +
'});\n';