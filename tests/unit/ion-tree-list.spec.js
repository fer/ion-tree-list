'use strict';

describe('Directives', function(){
    var templateCache, scope, element, Directive,
        templateUrl = 'ion-tree-list.tmpl.html',
        items = [
            {
                name: 'task 1',
                tree: [
                    {
                        name: 'task 1.1'
                    }
                ]
            },
            {
                name: 'task 2'
            },
            {
                name: 'task 3'
            }
        ];

    beforeEach(module('ion-tree-list'));
    beforeEach(module(templateUrl));
    beforeEach(inject(
        function($rootScope, $compile, $templateCache, $injector){
            Directive = function(){
                this.directive = $injector.get('ionTreeListDirective');
                this.directive[0].templateUrl = templateUrl;  // Override baseUrl for custom templates
                this.element = $compile(angular.element('<ion-tree-list items="items"></ion-tree-list>'))(scope);
                this.element.scope().$apply();
                this.isolateScope = this.element.isolateScope();
            };

            scope = $rootScope.$new();
            scope.items = items;
            templateCache = $templateCache
        }
    ));

    describe('ion-tree-list', function(){

        var d;

        beforeEach(function(){
            d = new Directive('ionTreeList')
        });

        it('has the ion tree list directive', function(done){
            expect(d.directive).toBeDefined();
            done()
        });

        it('logs a template for cart-item.html', function(done){
            expect(templateCache.get('ion-tree-list.tmpl.html')).toBeDefined();
            done()
        });

        it('has an isolate scope', function(done) {
            expect(d.isolateScope).toBeDefined();
            done()
        });

        it('has an isolate scope with a "items" property on it', function(done) {
            expect(d.isolateScope.items).toBeDefined();
            done()
        });

        it('has an moveItem method', function(done){
            expect(typeof d.isolateScope.moveItem).toBe('function');
            done();
        });

        it('items have the same of elements as in scope', function(done){
            expect(d.element[0].querySelectorAll('.item').length).toBe(4);
            done()
        });

        it('items has the correct className assigned', function(done){
            var list = d.element[0].children[3].children[0],
                classNameFirst = list.children[0].className,
                classNameFirstNested = list.children[1].children[0].className;

            expect(classNameFirst).toBe('item depth-1');
            expect(classNameFirstNested).toBe('item depth-2');
            done()
        })
    })
});