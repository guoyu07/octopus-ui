var hash = location.hash.substr(2);

hash = hash || 'structure';
$('#container').load('view/' + hash + '.html');