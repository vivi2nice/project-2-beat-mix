// Drum Arrays
let kicks = [false, false, false, false, false, false, false, false, 
false, false, false, false, false, false, false, false];
let snares = [false, false, false, false, false, false, false, false, 
false, false, false, false, false, false, false, false];
let hiHats = [false, false, false, false, false, false, false, false, 
false, false, false, false, false, false, false, false];
let rideCymbals = [false, false, false, false, false, false, false, false, 
false, false, false, false, false, false, false, false];

function getDrumArrayByName(name)	{
	switch(name)	{
		case 'kicks':
		return kicks; 
		case 'snares':
		return snares;
		case 'hiHats':
		return hiHats;
		case 'rideCymbals':
		return rideCymbals;

		default:
		return;

	}
};

function toggleDrum(drumArrayName, index)	{
	const drums = getDrumArrayByName(drumArrayName);
	if(!drums || index > 15 || index < 0)	{
		return;
	}
	drums[index] = !drums[index];
};

function clear(drumArrayName)	{
	const drums = getDrumArrayByName(drumArrayName);
	if(drums)	{
		drums.fill(false);
	}

	};

	function invert(drumArrayName)	{
		const drums = getDrumArrayByName(drumArrayName);
		if(!drums)	{
			return;
		}
		for (let i =0; i <drums.length; i++)	{
			drums[i] = !drums[i];
		}
	};

	const getNeighborPads = (x, y, size) => {
  const neighborPads = [];
  if (x >= size || y >= size || x < 0 || y < 0 || size < 1) {
    return neighborPads;
  }
  neighborPads.push([x - 1, y]);
  neighborPads.push([x, y - 1]);
  neighborPads.push([x + 1, y]);
  neighborPads.push([x, y + 1]);
  return neighborPads.filter((neighbor) => {
    return neighbor.every((val) => {
      return val >= 0 && val < size;
    });
  });
};


