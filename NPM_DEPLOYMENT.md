# NPM Deployment Guide

This guide explains how to deploy the `infomaxim6-form-engine` library to npm.

## Prerequisites

Before deploying to npm, ensure you have:

1. **npm account**: You need an npm account with publish permissions for the package
2. **npm login**: You must be logged in to npm on your local machine
3. **Latest build**: The library must be built before publishing

## Version Management

The library version is defined in `projects/infomaxim-form-engine/package.json`:

```json
{
  "name": "infomaxim6-form-engine",
  "version": "1.1.24"
}
```

Before publishing:
1. Update the version number in `projects/infomaxim-form-engine/package.json`
2. Follow [semantic versioning](https://semver.org/) guidelines:
   - **MAJOR** version for incompatible API changes
   - **MINOR** version for new functionality in a backward compatible manner
   - **PATCH** version for backward compatible bug fixes

## Deployment Steps

### 1. Login to npm (First Time Only)

```bash
npm login
```

Enter your npm credentials when prompted.

### 2. Build the Library

Build the library in partial compilation mode (required for npm publishing):

```bash
npm run build:lib
```

This command will:
- Compile the library source code
- Generate ES modules in the `dist/infomaxim-form-engine` directory
- Create TypeScript declaration files
- Prepare the package for publishing

### 3. Test the Build (Optional but Recommended)

Verify the build output before publishing:

```bash
npm run publish:lib:dry-run
```

This will simulate the publish process without actually publishing to npm. Check for:
- No errors or warnings
- Correct files being included/excluded
- Package size is reasonable

### 4. Publish to npm

Once you're confident the build is correct, publish to npm:

```bash
npm run publish:lib
```

This command will publish the package from the `dist/infomaxim-form-engine` directory to npm.

### 5. Verify the Deployment

After publishing, verify the deployment:

1. Check the npm registry:
   ```bash
   npm view infomaxim6-form-engine
   ```

2. Visit the package page: https://www.npmjs.com/package/infomaxim6-form-engine

3. Test installation in a separate project:
   ```bash
   npm install infomaxim6-form-engine@latest
   ```

## Manual Deployment (Alternative)

If you prefer to publish manually without using the npm scripts:

```bash
# 1. Build the library
ng build infomaxim6-form-engine

# 2. Navigate to the dist directory
cd dist/infomaxim-form-engine

# 3. Publish to npm
npm publish

# 4. Return to project root
cd ../..
```

## Troubleshooting

### Issue: "You do not have permission to publish"

**Solution**: Make sure you're logged in with an account that has publish permissions for the package:
```bash
npm whoami
npm login
```

### Issue: "Cannot publish over existing version"

**Solution**: You're trying to publish a version that already exists on npm. Update the version number in `projects/infomaxim-form-engine/package.json` before publishing.

### Issue: "prepublishOnly script error"

**Solution**: This error occurs when the library is built in full compilation mode. The library must be built in partial compilation mode, which is now configured correctly in `tsconfig.lib.json`.

### Issue: Build fails with "trailing comma" error

**Solution**: This has been fixed. The `package.json` in the library now has proper JSON formatting without trailing commas.

## Important Notes

1. **Always build before publishing**: Never publish without running `npm run build:lib` first
2. **Version control**: Commit version changes before publishing
3. **Changelog**: Consider maintaining a CHANGELOG.md to track changes between versions
4. **Git tags**: Tag releases in git to match npm versions:
   ```bash
   git tag v1.1.24
   git push origin v1.1.24
   ```

## Configuration Details

The library is configured for npm publishing with:

- **Partial compilation mode**: Enabled in `projects/infomaxim-form-engine/tsconfig.lib.json`
- **Output directory**: `dist/infomaxim-form-engine`
- **Package format**: ES modules with TypeScript declarations
- **Peer dependencies**: Angular 20.3.6+

## Quick Reference

```bash
# Update version in projects/infomaxim-form-engine/package.json

# Build the library
npm run build:lib

# Test publish (dry run)
npm run publish:lib:dry-run

# Publish to npm
npm run publish:lib

# Verify
npm view infomaxim6-form-engine
```

## Support

For issues or questions:
- GitHub Issues: [Repository Issues Page]
- Author: Andrew Farrell <andy@infomaxim.com>
