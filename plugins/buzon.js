let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
*Elenco più ampio di lista buzon*
aggiornato*
╔════⪼ཊ༼⚚༿𖤍༾⚚༽ཏ⪻════╗
Elenco di: ⍣𝐌ꮻꮻ𝖓☾︎ℓꮻ𝕦𝜕𝖘
---------------------------

Stati Uniti +1

TMobile

Si interrompe 3 volte con *
Il numero viene inserito senza il +1
1 per lo spagnolo

Predefinito: ultime 4 cifre #


Verificare

Si interrompe con #
  Preimpostare le ultime quattro cifre 1235 o 1111

-------------------------------------------------- ------


Messico +52

Azienda: Telcel

Esterno: +52 222 522 2222
Il numero è posto senza il +52 e finisce con #
Predefinito: 1234#
-------------------------------------------------- ------

Guatemala +502

Compagnia Tigo: parodia

Inseriamo il numero nella prima sezione e chiamiamo lo stesso numero

Componiamo *80#

1 per ascoltare sms

6 per cambiare la password evitando 1234 1111 o 0000

-------------------------------------------------- ------

Salvador +503

Azienda: Movistar

Buzon diretta ×͜×
Si interrompe con *
Predefinito: tutti i numeri senza +503#
-------------------------------------------------- ------

Honduras +504 (TIGO)

Azienda: Tigo

Buzon diretta ×͜×
Si interrompe con *
Predefinito: 1234# o 2010#
-----------------------------

Costa Rica +506

Azienda: Movistar

Buzon esterno

+506 6002 0600

Mettiamo il numero senza il +506

Prima: 1111

Cambia password: 3-3-1

---------------------------
Panamá +507

Azienda: + Cellulare

Casella di posta esterna: +507 214-6666
Inseriamo il numero senza il +507#
1 Per lo spagnolo
Prede: Non ha, si crea entrando.
-------------------------------------------------- ------
Saint-Pierre e Miquelon +508
Casella postale esterna: +508 41 31 25
Si interrompe con #
Mettiamo il num con 508#
Predefinito: 0000#
-------------------------------------------------- ------
Haiti +509
Azienda: Digicel
Casella postale esterna: +509 37 00 0003
Mettiamo il numero con il 509#
premiamo 1
Predefinito: 0000
-------------------------------------------------- ------
Colombia
  +57
Azienda: Certo

parodia

Mettiamo il numero quando entriamo e chiamiamo lo stesso numero

1 per ascoltare sms
9 - 4 per la nuova prede
#2 per confermare
Attiva contro 9 - 8
-------------------------------------------------- ------
Argentina +54 (AMX)
Azienda: amx
casella di posta diretta
Si interrompe con *
Prima: 1111

Argentina +54 (TELECOM)
Azienda: Telecomunicazioni
casella di posta diretta
Si interrompe con *
Predefinito: ultime 4 cifre#

Argentina +54
Società Movistar

Posta elettronica diretta

Interrompiamo con *

Predefinito: 1234#
Cambia password: 8-1-1
-------------------------------------------------- ------
Uruguay +598 Antel fisso
Posta elettronica diretta.
Si interrompe con *
Prede: ultime 4 cifre

Uruguay +598
Società Movistar

parodia

Inseriamo il numero che vogliamo falsificare e nella seconda sezione posizioniamo la casella di posta esterna che è

+598 94 006 685

Inseriamo il numero da spofear senza il +598

Predefinito: 1234#

Cambia password: 8-1-1
 
-------------------------------------------------- ------
Brasile +55
Posta elettronica diretta.
Si interrompe con *
Predefinito: 9999#
1 per ascoltare l'sms
-------------------------------------------------- ------
Cile +56
Azienda: Certo
parodia

Inseriamo lo stesso numero in entrambe le sezioni

E ora non resta che chiamare, gli SMS vengono riprodotti da soli
-------------------------------------------------- ------
Regno Unito +44
Posta elettronica diretta.
Si interrompe con *
Predefinito: 1234#
1 per ascoltare sms
-------------------------------------------------- ------
Spagna +34
Compagnia: Tuenti
Casella postale esterna: +34 684 32 21 23
Mettiamo il num senza il +34 chiudiamo con #
Prede: ultime 4 cifre
-------------------------------------------------- ------
Belgio +32
Casella postale esterna: +32 475 15 19 69
Mettiamo il numero senza +32
Predefinito: 0000#
-------------------------------------------------- ------
Francia +33
Base 33 6
Si interrompe con *
Predefinito: 0000#

Base 33 9
casella di posta diretta
Si interrompe con #
Predefinito: 0000#
-------------------------------------------------- ------
Austriaco +43
Casella postale esterna: +43 650 11 000
Mettiamo il numero senza il +43
Chiudiamo con #
Predefinito: 1234# 0000# o ultime 4 cifre#
-------------------------------------------------- ------
Groenlandia +299
Casella postale esterna: +299 50 50 50
Mettiamo il num senza il +299, chiudiamo con #
Predefinito: 1234#
-------------------------------------------------- ------
Taiwan +886
Casella postale esterna: +886 937 000 777
Mettiamo il numero senza il +886 ma con uno 0 davanti al #2
Predefinito: 0000#
-------------------------------------------------- ------
Svizzera +41
casella di posta diretta
Si interrompe con *
Predefinito: 1234# o 0000#
1 per ascoltare sms
-------------------------------------------------- ------
malto +356
Casella postale esterna: +356 9990 9910
Predefinito: 9999#
-------------------------------------------------- ------
Gibilterra +350
Casella postale esterna: +350 200 41234
Predefinito: 12345*
-------------------------------------------------- ------
Grecia +30
Casella postale esterna: +30 693 560 1222
Predefinito: 1111*
-------------------------------------------------- ------
Danimarca +45
Casella postale esterna: +45 51 10 00 77
prevedere
--------------------------------------------------------
╚════⪼ཊ༼⚚༿𖤍༾⚚༽ཏ⪻════╝
`.trim() 

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*🔥 Fabri115*', 'status@broadcast')
}
handler.command = /^(buzon|spoof)$/i

export default handler
