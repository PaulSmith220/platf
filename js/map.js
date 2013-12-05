

map_arr = [
'1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001',
'1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001',
'1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001',
'1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001',
'1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001',
'1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001',
'1000110000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000001',
'1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001',
'1100000000000111100000000000000110000000000000000000000000000000000000000000000000000000000000000001',
'1000111000000100000100001100001000001100000000000000000000000000000000000000000000000000000000000001',
'1010000000000100000110000000000000000000000000000000000000000000000000000000000000000000000000000001',
'1001100011000100111000000000000011000000000000000000000000000000000000000000000000000000000000000001',
'1000000000000100000000100000000110000000000000000000000000000000000000000000000000000000000000000001',
'1000000000001100000001110000110110000000000000000000000000000000000000000000000000000000000000000001',
'1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111'

];
block_size = 28;
max_block_width = 18;
var cnt = 0;

for (var y = 0; y < map_arr.length; y++) {
	for (var x = 0; x < map_arr[0].length; x++) {
		cnt = 0;
		if (map_arr[y][x] == '1') {
			cnt = 1;
			for (var k = 1; k < max_block_width; k++) {
				if (x+k > map_arr[y].length)
					break;
				if (map_arr[y][x+k] == '1') {
					cnt += 1;
				} else
					break;
			}
			console.log('line '+y+': '+cnt+'-block founded!');
			boxes.push({
				x: x*block_size,
				y: y*block_size+0,
				width: block_size*(cnt),
				height:block_size,
				color: getRndColor()
			});
			x += cnt-1;
		}
	}
}
// vertical optimization




player.x = 50;
player.y = height-50;