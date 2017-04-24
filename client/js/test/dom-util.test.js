const {removeChildren, createTH, createTD, createTR} = require('../dom-util');

describe('dom-util', () => {

  describe('dom-creation-utilities', () => {
    describe('createTH', () => {
      it('produces a valid TH element', () => {
        const el = createTH();

        expect(el.tagName).toBe('TH');
      });

      it('sets the text of the TH', () => {
        const text = ('Ted Danson in the streets');
        const el = createTH(text);

        expect(el.textContent).toBe(text);
      })
    });

    describe('createTR', () => {
      it('produces a valid TR element', () => {
        const el = createTR();

        expect(el.tagName).toBe('TR');
      });

    });

    describe('createTD', () => {
      it('produces a valid TD element', () => {
        const el = createTD();

        expect(el.tagName).toBe('TD');
      })
    })

  });

  describe('remove-children', () => {
    it('removes one child', () => {
      // set up initial state
      const parent = document.createElement('DIV');
      const child = document.createElement('STRONG');
      parent.appendChild(child);

      // inspect initial state
      expect(parent.childNodes.length).toBe(1);
      expect(parent.childNodes[0]).toBe(child);

      // execute code under test
      removeChildren(parent);

      //inspect post-execution state
      expect(parent.childNodes.length).toBe(0);

    });
  });
});
