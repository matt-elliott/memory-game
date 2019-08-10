# The Outline


## ROUTES
1. / 									: shows images and runs game



## FRONT END BUILD
1. make click-image component
2. on game init set state with 0 points
3. on game init load top score from score object in local storage
4. on game win/lose display win/lose alert and save score and highscore to session local object
5. on game complete restart the game



## PSUEDOCODE
### Click Game Component

• will have an array of images

```
images = [
	{
		id: number,
		src: string,
		clicked: boolean,
		display_order: number
			
	},
	...
]
```

• starting state

```
{
	score: 0,
	highscore: 0 || score loaded from session storage
}
```

• loop through images and render to page
for each image

```
<figure className="col border" id={image.id} onClick="imageClickHandler">
	<img src={image.src}>
</figure>
```

• the click handler

```
imageClickHander() => {
	• get element id and find it in the data
	• check if clicked === true
		• end the game
		• else set clicked to true on matched data item
			> restart game
	• if score > image.length
		• show win game alert
		> restart game
	
	
}
```

• the game restarter

```
restartGame() => {
	• save score to user highscore if it is greater than stored highscore
	• reset score to 0
	> imageShuffler()
}
```


• the card shuffler

```
imageShuffler() => {
	• gets images from database (or use fs to get json file to skip db headaches)
	• for each image do a Math random on total length of images and place into new randomNumberArray
		• if there are matches dont push to array
		• set image display order by using current index of randomNumberArray
	• set state and refresh front end
}

```

• the alert popover

```
alertUser(alertMessage) => {
	• alerts the user with whatever message is sent using bootstraps popover component
}

```