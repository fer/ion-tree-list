'use strict';
/* global angular, inject, spyOn, expect */

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
                this.isolateScope = this.element.isolateScope()
            };

            scope = $rootScope.$new();
            scope.items = items;
            scope.$digest();
            templateCache = $templateCache
        }
    ));

    describe('ion-tree-list', function(){

        var d;

        beforeEach(function(){
            d = new Directive('ionTreeList')
        });

        it('has the ion tree list directive', function(){
            expect(d.directive).toBeDefined()
        });

        it('logs a template for cart-item.html', function(){
            expect(templateCache.get('ion-tree-list.tmpl.html')).toBeDefined()
        });

        it('has an isolate scope', function() {
            expect(d.isolateScope).toBeDefined()
        });

        it('has an isolate scope with a "items" property on it', function() {
            expect(d.isolateScope.items).toBeDefined()
        });

        it('has a moveItem method', function(){
            expect(typeof d.isolateScope.moveItem).toBe('function')
        });

        it('items have the same of elements as in scope', function(){
            expect(d.element[0].querySelectorAll('.item').length).toBe(4)
        });

        it('items has the correct className assigned', function(){
            var list = d.element[0].children[3].children[0],
                classNameFirst = list.children[0].className,
                classNameFirstNested = list.children[1].children[0].className;

            expect(classNameFirst).toBe('item depth-1');
            expect(classNameFirstNested).toBe('item depth-2');
        });
        
        it('has a emitEvent method', function(){
            expect(typeof d.isolateScope.emitEvent).toBe('function')
        });
        
        it('has an emitEvent on item click called $ionTreeList:ItemClicked', function($timeout){
            spyOn(d.isolateScope, '$emit');
            
            var items = d.element.find('ion-item'), item0 = items[0];
            item0.click();
            d.isolateScope.$digest();
            $timeout(function(){
                expect(d.isolateScope.$emit).toHaveBeenCalled();
                expect(d.isolateScope.$emit).toHaveBeenCalledWith('$ionTreeList:ItemClicked', item0)
            }, 0)
        })
        
        it('has an emitEvent on list loaded called $ionTreeList:LoadComplete', function($timeout){
            spyOn(d.isolateScope, '$emit');
            d.isolateScope.items.pop();
            d.isolateScope.$digest();
            $timeout(function(){
                expect(d.isolateScope.$emit).toHaveBeenCalled();    
                expect(d.isolateScope.$emit).toHaveBeenCalledWith('$ionTreeList:LoadComplete')
            }, 0)
        })
    })
});
