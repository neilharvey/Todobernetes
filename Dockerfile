FROM mcr.microsoft.com/dotnet/aspnet:5.0 AS base
# Install node
RUN apt-get update
RUN apt-get -y install curl gnupg
RUN curl -sL https://deb.nodesource.com/setup_11.x  | bash -
RUN apt-get -y install nodejs
RUN npm install
WORKDIR /app

FROM mcr.microsoft.com/dotnet/sdk:5.0 AS build
RUN apt-get update
RUN apt-get -y install curl gnupg
RUN curl -sL https://deb.nodesource.com/setup_11.x  | bash -
RUN apt-get -y install nodejs
RUN npm install

WORKDIR /src
COPY ./src /src
RUN dotnet restore "Todobernetes.csproj"
RUN dotnet build "Todobernetes.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "Todobernetes.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Todobernetes.dll"]