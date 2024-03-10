# To learn more about how to use Nix to configure your environment
# see: https://developers.google.com/idx/guides/customize-idx-env
{ pkgs, ... }: {
  channel = "stable-23.11"; # "stable-23.11" or "unstable"
  # Use https://search.nixos.org/packages to  find packages
  packages = [
    pkgs.nodejs
    pkgs.nodePackages.firebase-tools
    pkgs.python3
  ];
  # Sets environment variables in the workspace
  env = { };
  # search for the extension on https://open-vsx.org/ and use "publisher.id"
  idx.extensions = [
    # "vscodevim.vim"
  ];
  # preview configuration
  idx.previews = {
    enable = true;
    previews = [
      {
        command = ["python3" "-m" "http.server" "$PORT" "--bind" "0.0.0.0"];
        manager = "web";
        id = "web";
      }
      {
        manager = "ios";
        id = "ios";
      }
    ];
  };
}