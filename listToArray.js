function listToArray(list, array = []){
	array = [];

	array.push(list.value);

	if (list.rest !== null) {		
		listToArray(list.rest, array);
	}
	else
	{
		return array;	
	}
}

module.exports = listToArray;