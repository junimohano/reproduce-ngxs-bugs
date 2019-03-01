# Reproduce Ngxs 3.4.0 Bugs

1. Navigate to Add page
2. Click Open Alert button then it will show alert message
3. Navigate to Edit page
4. Click Open Alert button then it will show alert message multiple times (should be called one time).

It is happened if a module has a feature state which is called by different routes on lazy load.

NGXS 3.3.4 is fine but 3.4.0 has issues.
