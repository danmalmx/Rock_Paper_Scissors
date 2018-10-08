const { RBS } =  require('./spec.helper')

describe('Rock Paper Scissor', () => {
    let rbs = new RBS
    
    it('returns a number if no game rules are met', () => {
        expect(rbs.change("myChoice")).to.eql(value)
    })

})
