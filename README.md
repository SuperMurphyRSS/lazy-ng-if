# lazy-ng-if

Prevents Angular compilation of a DOM sub-tree, if the given expression is false.
This is in order to improve overall page loading time (Angular's ng-if DOM sub-tree always gets complied, then removed from DOM if needed).
Once the lazy-ng-if expression is true, it will be replaced with regular ng-if.

Usage:
<div lazy-ng-if="{{some-expression}}">
   This DOM part won't be compiled and added to DOM if some-expression is false.
   It will get compiled and added to DOM once some-expression if true (and will be replaced with regular ng-if).
</div>

This pacakge is availble as a bower library:
http://libraries.io/bower/lazy-ng-if
