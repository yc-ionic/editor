import { inject, TestBed } from '@angular/core/testing';
import { EditorModule, Editor } from '../src';

describe('SampleComponent', () => {
  let editor: Editor;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [EditorModule.forRoot()]
    });
  });

  beforeEach(inject([Editor], _editor => {
    editor = _editor;
  }))

  it('Should be defined', () => {
    expect(editor).toBeTruthy();
  });

  it('Should edit', () => {
    expect(editor.edit({
      navCtrl: {
        push: x => { }
      } as any,
      title: '',
      type: '',
    })).toBeTruthy();
  });
});
