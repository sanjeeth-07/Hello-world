function sayHello(language) {
	var arrHellos = {
		"Chinese" : "你好世界",
		"Dutch" : "Hallo wereld",
		"English" : "Hello world",
		"French" : "Bonjour monde",
		"German" : "Hallo Welt",
		"Greek" : "γειά σου κόσμος",
		"Italian" : "Ciao mondo",
		"Japanese" : "こんにちは世界",
		"Korean" : "여보세요 세계",
		"Portuguese" : "Olá mundo",
		"Russian" : "Здравствуй, мир",
		"Spanish" : "Hola mundo"
	};
	alert(arrHellos[language]);
}

<form method="get" action="javascript:void()">
  <label>
    <strong>Language:</strong> 
    <select name="language" id="language">
      <option>Chinese</option>
      <option>Dutch</option>
      <option>English</option>
      <option>French</option>
      <option>German</option>
      <option>Greek</option>
      <option>Italian</option>
      <option>Japanese</option>
      <option>Korean</option>
      <option>Portuguese</option>
      <option>Russian</option>
      <option>Spanish</option>
    </select>
  </label>
  <input type="button" onclick="sayHello(this.form.language.options[this.form.language.selectedIndex].value);" value="Say Hello" />
</form>
