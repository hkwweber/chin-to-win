const {expect} = require('chai');
const {db, Celeb} = require('../models')

describe ('Celeb model', () => {
	beforeEach(() => db.sync({force: true}))
	afterEach(() => db.sync({force: true}))

	describe('correct data', () => {
		let jenniferLopez;

		beforeEach(() => {
			return Celeb.create({
				name: 'Jennifer Lopez',
				fullPhoto: 'https://i.imgur.com/flewa1k.jpg',
				chinCropPhoto: 'https://i.imgur.com/FBbk0RC.jpg'
			})
			.then(celebrity => {
				jenniferLopez = celebrity;
			})
		})

		it ('returns the correct name', () => {
			expect(jenniferLopez.name).to.be.equal('Jennifer Lopez')
		})

		it ('returns the correct fullPhoto URL', () => {
			expect(jenniferLopez.fullPhoto).to.be.equal('https://i.imgur.com/flewa1k.jpg')
		})

		it ('returns the correct chinCropPhoto URL', () => {
			expect(jenniferLopez.chinCropPhoto).to.be.equal('https://i.imgur.com/FBbk0RC.jpg')
		})
	})
})
