import JavaScriptObfuscator from 'javascript-obfuscator';

const handler = async (m, {conn, text}) => {
  if (!text) return m.reply('*Ingresa el codigo que vas a ofuscar.*');
  function obfuscateCode(code) {
    return JavaScriptObfuscator.obfuscate(code, {
      compact: false,
      controlFlowFlattening: true,
      deadCodeInjection: true,
      simplify: true,
      numbersToExpressions: true,
    }).getObfuscatedCode();
  }
  const obfuscatedCode = await obfuscateCode(text);
  conn.sendMessage(m.chat, {text: obfuscatedCode}, {quoted: m});
};
handler.command = /^(ofuscar|ofuscador)$/i;
handler.owner = true;
export default handler;
